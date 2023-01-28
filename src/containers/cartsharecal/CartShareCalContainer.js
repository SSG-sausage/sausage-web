import React, { useState, useEffect, useRef } from 'react';
import { findCartShareCal, updateCmplYn } from '../../api/cartsharecal/cartShareCal';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartShareCal from '../../components/cartsharecal/CartShareCal';

const CartShareCalContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();
    const [cartShareCal, setCartShareCal] = useState({});
    const [cookies, setCookie] = useCookies(['mbrId']);

    const onClickCreate = () => {
        navigate(`/cart-share-calculation/${cartShareCalId}/create`);
    };

    const onClickUpdate = () => {
        navigate(`/cart-share-calculation/${cartShareCalId}/update`);
    };
    const onClickCmplYn = (mbrId, cartShareCalId) => {
        updateCmplYn(cookies.mbrId, cartShareCalId, mbrId).then(() => {
            findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
                setCartShareCal(response.data.data);
            });
        });
    };

    useEffect(() => {
        findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
            setCartShareCal(response.data.data);
        });
    }, []);
    return (
        <CartShareCal
            onClickCreate={onClickCreate}
            cartShareCal={cartShareCal}
            onClickCmplYn={onClickCmplYn}
            onClickUpdate={onClickUpdate}
        />
    );
};

export default CartShareCalContainer;
