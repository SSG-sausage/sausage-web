import React, { useState, useEffect, useRef } from 'react';
import { findCartShareCal, updateCmplYn, saveCartShareNoti } from '../../api/cartsharecal/cartShareCal';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartShareCalOrdList from '../../components/cartsharecal/CartShareCalOrdList';

const CartShareCalOrdListContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();
    const [cartShareCal, setCartShareCal] = useState({});
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [openOrdSheet, setOpenOrdSheet] = useState(false);

    const onClickCreate = () => {
        navigate(`/cart-share-cal/${cartShareCalId}/create`);
    };

    useEffect(() => {}, []);
    return <CartShareCalOrdList />;
};

export default CartShareCalOrdListContainer;
