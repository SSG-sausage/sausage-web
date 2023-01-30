import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { findCartShareCalList } from '../../api/cartsharecal/cartShareCal';
import CartShareCalList from '../../components/cartsharecal/CartShareCalList';

const CartShareCalListContainer = () => {
    const navigate = useNavigate();
    const { cartShareId } = useParams();
    const [cartShareCalList, setCartShareCalList] = useState([]);

    const onClickCal = cartshareCalId => {
        navigate(`/cart-share-cal/${cartshareCalId}`);
    };
    const onClickBack = () => {
        navigate(`/cart-share/${cartShareId}`);
    };

    const onClickCreate = () => {
        navigate(`/cart-share/${cartShareId}/cart-share-cal/ord`);
    };
    useEffect(() => {
        findCartShareCalList(cartShareId).then(res => {
            setCartShareCalList(res.data.data);
        });
    }, []);
    return (
        <CartShareCalList
            cartShareCalList={cartShareCalList}
            onClickBack={onClickBack}
            onClickCal={onClickCal}
            onClickCreate={onClickCreate}
        />
    );
};

export default CartShareCalListContainer;
