import Login from '../../components/mbr/Login';
import { login } from '../../api/mbr/login';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { axiosInstance } from '../../api/instance';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    const navigate = useNavigate();

    const [mbr, setMbr] = useState({
        id: '',
        pwd: '',
    });

    const [mbrIdCookie, setMbrCookie, removeMbrCookie] = useCookies();

    const onChangeMbr = e => {
        setMbr({
            ...mbr,
            [e.target.name]: e.target.value,
        });
    };

    const onClickLoginBnt = () => {
        login(mbr.id, mbr.pwd)
            .then(response => {
                console.log();
                setMbrCookie('mbrId', response.data.data.mbrId);
                axiosInstance.defaults.headers.common['mbrId'] = response.data.data.mbrId;
                alert('로그인 성공');
                navigate(`/item-list`);
            })
            .catch(() => {
                alert('로그인 실패');
            });
    };

    return <Login onClickLoginBnt={onClickLoginBnt} onChangeMbr={onChangeMbr} />;
};

export default LoginContainer;
