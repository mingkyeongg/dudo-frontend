import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginHandler() {
  const navigate = useNavigate();

  // 현재 페이지의 URL 에서 code 라는 파라미티 값을 추출 
  const code = new URL(window.location.href).searchParams.get("code");

  // useEffect 는 컴포넌트가 처음 렌더링될 때 실행됨 
  useEffect(() => {
    const kakaoLogin = async () => {
      await fetch(`${process.env.REACT_REDIRECT_URL}/?code=${code}`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",   
          },
        }).then((res) => { 
        // 변경할 부분 
        navigate("/Login");
      });
    };
    kakaoLogin();
  }, [code, navigate]);

  return (
    <div>
      <p>로그인 중입니다.</p>
    </div>
  )
}

export default LoginHandler;
