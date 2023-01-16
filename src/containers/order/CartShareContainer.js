import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { findCartShareList } from '../../api/order/cart-share';
import CartShare from '../../components/order/CartShare';

const CartShareContainer = () => {
    const navigate = useNavigate();
    const [cartShareList, setCartShareList] = useState([]);

    const onClickCartShare = cartShareId => {
        navigate(`/cart-share/${cartShareId}`);
    };

    useEffect(() => {
        async function fetchCartShareList() {
            try {
                const response = await findCartShareList();
                const data = response.data.data;
                setCartShareList(data.cartShareList);
            } catch (error) {
                alert('공유장바구니 리스트 조회 실패');
            }
        }
        fetchCartShareList();
    }, []);

    return <CartShare cartShareList={cartShareList} onClickCartShare={onClickCartShare} />;
};

export default CartShareContainer;
