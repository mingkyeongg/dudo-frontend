import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCheckData = (getData, condition, delay = 10000) => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = getData;
      console.log("🔄 데이터 체크 중:", data);

      if (condition(data)) {
        console.log("✅ 조건 충족! 새로고침 실행");
        navigate(0);
      }
    }, delay);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [getData, condition, delay]);
};

export default useCheckData;
