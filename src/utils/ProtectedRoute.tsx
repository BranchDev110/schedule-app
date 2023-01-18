import {useContext} from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export type ProtectedRouteProps = {
    children: JSX.Element;
}
const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const {token} = useContext(AuthContext);

    if(!!token) {
        return children;
    }
    
    return <Navigate to="/login"/>;
}

export default ProtectedRoute;