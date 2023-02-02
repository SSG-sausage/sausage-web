import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import CartShareNoti from '../../components/cartshare/CartShareNoti';
import { findCartShareNotiList } from '../../api/cartshare/cartShare';
const CartShareNotiContainer = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [cartShareNotiList, setCartShareNotiList] = useState([]);

    const onClickBack = () => {
        // TODO
        navigate(`/cart-share/1`);
    };

    const onClickHome = () => {
        navigate(`/`);
    };

    useEffect(() => {
        findCartShareNotiList(cookies.mbrId).then(res => {
            setCartShareNotiList(res.data.data);
        });
    }, []);
    return <CartShareNoti cartShareNotiList={cartShareNotiList} onClickBack={onClickBack} onClickHome={onClickHome} />;
};
export default CartShareNotiContainer;
