import { useEffect } from "react";

const useCheckData = (getData, condition, delay = 1000) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getData(); // 데이터 가져오기
      console.log("🔄 데이터 체크 중:", data);

      if (condition(data)) {
        console.log("✅ 조건 충족! 새로고침 실행");
        window.location.reload(); // 새로고침
      }
    }, delay);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [getData, condition, delay]);
};

export default useCheckData;
