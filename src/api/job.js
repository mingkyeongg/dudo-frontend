import apiInstance from './apiInstance';
import { workFields } from './mocks';

export const isDevMode = () => {
  return import.meta.env.MODE === 'development';
};

// 관심분야 조회
export const getField = async () => {

  console.log(import.meta.env.MODE);
  console.log('호출');

  if (isDevMode()) {
    return workFields;
  }
  console.log('🟢 관심분야 조회 API 호출');
  const data = await apiInstance.get('workRecommad/5');
  return data;
}
