import React, { useState, useEffect, useRef } from 'react';
import { getOrdItemListCartShareCal } from '../../api/ord/ord';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartShareCalOrdList from '../../components/cartsharecal/CartShareCalOrdList';

const CartShareCalOrdListContainer = () => {
    const navigate = useNavigate();
    const { cartShareId } = useParams();
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [ordList, setOrdList] = useState([]);

    const onClickBack = () => {
        navigate(`/cart-share/${cartShareId}/cart-share-cal`);
    };

    const onClickCal = cartShareCalId => {
        navigate(`/cart-share-cal/${cartShareCalId}`);
    };

    useEffect(() => {
        getOrdItemListCartShareCal(cartShareId).then(res => {
            setOrdList(res.data.data.cartShareOdrList);
        });
    }, []);
    return <CartShareCalOrdList ordList={ordList} onClickBack={onClickBack} onClickCal={onClickCal} />;
};

export default CartShareCalOrdListContainer;
