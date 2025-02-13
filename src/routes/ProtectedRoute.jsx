import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!sessionStorage.getItem("userId"); // 로그인 여부 확인

  return isAuthenticated ? <Navigate to="/main" replace /> : element;
};

export default ProtectedRoute;
