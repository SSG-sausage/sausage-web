import Login from '../../components/mbr/Login';
import { login } from '../../api/login';
import { useState } from 'react';
import {useCookies} from 'react-cookie'

const LoginContainer = () => {

    const [mbr, setMbr] = useState({
        id: "",
        pwd: "",
    });

    const [mbrIdCookie, setMbrCookie, removeMbrCookie] = useCookies();

    const onChangeMbr = (e) => {
        setMbr({
            ...mbr,
            [e.target.name]: e.target.value,
        });
    };

    const onClickLoginBnt = () => {
        login(mbr.id, mbr.pwd).then(response => {

            setMbrCookie('mbrId', mbr.id)
            alert("로그인 성공")

        }).catch(() => {
            alert("로그인 실패")
        });
    };

    return <Login onClickLoginBnt={onClickLoginBnt} onChangeMbr={onChangeMbr} />;
};

export default LoginContainer;