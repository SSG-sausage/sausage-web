import React, { useState, useEffect, useRef } from 'react';
import CartShareDetail from '../../components/cartshare/CartShareDetail';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as stompjs from '@stomp/stompjs';
import {
    deleteCartShareItem,
    findCartShare,
    updateCartShareItemComm,
    updateCartShareItemQty,
    updateCartShareMbrProg,
} from '../../api/cartshare/cartShare';

const CartShareDetailContainer = () => {
    const navigate = useNavigate();
    const { cartShareId } = useParams();
    const client = useRef({});
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [cartShareData, setCartShareData] = useState({
        cartShareId: 0,
        cartShareMbrId: 0,
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
    const [isOrdModalOn, setOrdModalOn] = useState(false);

    const changeOrdModalOn = () => {
        setOrdModalOn(!isOrdModalOn);
    };

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

    const onClickDone = async (cartShareMbrId, progStatCd) => {
        await updateCartShareMbrProg(cookies.mbrId, cartShareId, cartShareMbrId, progStatCd);
    };

    const onClickPlusOrMinus = async (cartShareItemId, qty) => {
        await updateCartShareItemQty(cookies.mbrId, cartShareId, cartShareItemId, qty);
    };

    const onClickCommOrMy = async (cartShareItemId, commYn) => {
        await updateCartShareItemComm(cookies.mbrId, cartShareId, cartShareItemId, commYn);
    };

    const onClickTrash = async cartShareItemId => {
        await deleteCartShareItem(cookies.mbrId, cartShareId, cartShareItemId);
    };

    const fetchCartShare = async () => {
        const response = await findCartShare(cookies.mbrId, cartShareId);
        const data = response.data.data;
        setCartShareData(data);
    };

    const onClickCartshareCal = cartShareId => {
        navigate(`/cart-share/${cartShareId}/cart-share-cal`);
    };

    useEffect(() => {
        connect();

        fetchCartShare();

        return () => disconnect();
    }, []);

    return (
        <CartShareDetail
            cartShareData={cartShareData}
            onClickDone={onClickDone}
            onClickPlusOrMinus={onClickPlusOrMinus}
            onClickCommOrMy={onClickCommOrMy}
            onClickTrash={onClickTrash}
            isOrdModalOn={isOrdModalOn}
            changeOrdModalOn={changeOrdModalOn}
            onClickCartshareCal={onClickCartshareCal}
        />
    );
};

export default CartShareDetailContainer;
