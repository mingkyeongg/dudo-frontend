import axios from 'axios';

const apiInstance = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('Authorization');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isReissuing = false;
const failedQueue = [];

const processQueue = (error) => {
  while (failedQueue.length) {
    const { resolve, reject, config } = failedQueue.shift();
    error ? reject(error) : resolve(apiInstance(config));
  }
};

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (error.response) {
      const data = error.response.data;
      const { code } = data;

      if (error.response.status === 401) {
        if (code === 100) {
          window.location.href = '/Login';
          return Promise.reject(error);
        }

        if (code === 101) {
          if (isReissuing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject, config: originalRequest });
            });
          }

          isReissuing = true;

          return apiInstance
            .post('v1/reissue')
            .then(() => {
              sessionStorage.setItem('Authorization', 'new_access_token');
              processQueue(null);
              return apiInstance(originalRequest);
            })
            .catch((reissueError) => {
              processQueue(reissueError);
              sessionStorage.removeItem('Authorization');
              window.location.href = '/Login';
              console.error('🔴 Reissue Error:', reissueError);
              return Promise.reject(reissueError);
            })
            .finally(() => {
              isReissuing = false;
            });
        }
      }
    }

    return Promise.reject(error);
  }
);

export default apiInstance;
