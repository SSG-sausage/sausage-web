import React, { useState, useEffect, useRef } from 'react';
import CartShareDetail from '../components/CartShareDetail';
import { useParams } from 'react-router-dom';
import * as stompjs from '@stomp/stompjs';
import { findCartShare } from '../api/cartShare';

const CartShareDetailContainer = () => {
    const { cartShareId } = useParams();
    const client = useRef({});
    const [cartShareData, setCartShareData] = useState({
        cartShareId: 0,
        mastrMbrId: 0,
        mbrIdList: [],
        cartShareNm: '',
        cartShareAddr: '',
        commonItemList: [],
        personalItemList: [],
    });

    const connect = () => {
        client.current = new stompjs.Client({
            brokerURL: 'ws://localhost:8082/ws',
            onConnect: () => {
                subscribe();
            },
        });
        client.current.activate();
    };

    const subscribe = () => {
        client.current.subscribe('/sub/cart-share/' + cartShareId, body => {
            const jsonBody = JSON.parse(body.body);
            fetchCartShare();
        });
    };

    const disconnect = () => {
        client.current.deactivate();
    };

    const fetchCartShare = async () => {
        try {
            const response = await findCartShare(cartShareId);
            const data = response.data.data;
            setCartShareData(data);
        } catch (error) {
            alert('공유장바구니 조회 실패');
        }
    };

    useEffect(() => {
        connect();

        fetchCartShare();

        return () => disconnect();
    }, []);

    return <CartShareDetail cartShareData={cartShareData} />;
};

export default CartShareDetailContainer;
