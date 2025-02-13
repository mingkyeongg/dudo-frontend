import { useEffect } from "react";

const useAutoRefresh = (delay = 10000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
};

export default useAutoRefresh;
