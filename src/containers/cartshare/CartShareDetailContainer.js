import React, { useState, useEffect, useRef } from 'react';
import CartShareDetail from '../../components/cartshare/CartShareDetail';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as stompjs from '@stomp/stompjs';
import { findCartShare } from '../../api/cartshare/cartShare';

const CartShareDetailContainer = () => {
    const { cartShareId } = useParams();
    const client = useRef({});
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [cartShareData, setCartShareData] = useState({
        cartShareId: 0,
        mastrYn: false,
        cartShareNm: '',
        cartShareItemQty: 0,
        cartShareMbrCnt: 0,
        cartShareChoosingMbrCnt: 0,
        mastrNm: '',
        cartShareAddr: '',
        commonItemInfo: {
            commonAmt: 0,
            cartShareItemList: [],
        },
        personalItemInfo: [],
        cartShareAmtInfo: {
            ssgOrdAmt: 0,
            ssgOrdAmt: 0,
            ssgShppAmt: 0,
            ssgTotalAmt: 0,
            ssgFreeShppRemainAmt: 0,
            tradersOrdAmt: 0,
            tradersShppAmt: 0,
            tradersTotalAmt: 0,
            tradersFreeShppRemainAmt: 0,
            ordAmt: 0,
            discountAmt: 0,
            shppAmt: 0,
            totalAmt: 0,
            itemQty: 0,
        },
        progStatCd: 'IN_PROGRESS',
        editPsblYn: true,
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
        const response = await findCartShare(cookies.mbrId, cartShareId);
        const data = response.data.data;
        setCartShareData(data);
    };

    useEffect(() => {
        connect();

        fetchCartShare();

        return () => disconnect();
    }, []);

    return <CartShareDetail cartShareData={cartShareData} />;
};

export default CartShareDetailContainer;
