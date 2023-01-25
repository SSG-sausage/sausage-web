import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { findCartShareList } from '../../api/cartshare/cartShare';
import CartShare from '../../components/cartshare/CartShare';

const CartShareContainer = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [cartShareList, setCartShareList] = useState([]);

    const onClickCartShare = cartShareId => {
        navigate(`/cart-share/${cartShareId}`);
    };

    const fetchCartShareList = async () => {
        const response = await findCartShareList(cookies.mbrId);
        const data = response.data.data;
        setCartShareList(data.cartShareList);
    };

    useEffect(() => {
        fetchCartShareList();
    }, []);

    return <CartShare cartShareList={cartShareList} onClickCartShare={onClickCartShare} />;
};

export default CartShareContainer;
