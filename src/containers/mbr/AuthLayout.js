import { Cookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { axiosInstance } from '../../api/instance';

const AuthLayout = () => {
    const cookies = new Cookies();
    const mbrId = cookies.get('mbrId');

    console.log(cookies.get('mbrId'));

    if (mbrId !== undefined) {
        axiosInstance.defaults.headers.common['mbrId'] = mbrId;
        return <Outlet />;
    }

    return <Navigate to={'/login'} replace />;
};

export default AuthLayout;
