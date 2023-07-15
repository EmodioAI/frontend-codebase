import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const active = useSelector((state: RootState) => state.is_active);

    return active ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
