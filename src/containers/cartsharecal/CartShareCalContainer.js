import React, { useState, useEffect, useRef } from 'react';
import { findCartShareCal, updateCmplYn, saveCartShareNoti } from '../../api/cartsharecal/cartShareCal';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartShareCal from '../../components/cartsharecal/CartShareCal';

const CartShareCalContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();
    const [cartShareCal, setCartShareCal] = useState({});
    const [cookies, setCookie] = useCookies(['mbrId']);
    const [openOrdSheet, setOpenOrdSheet] = useState(false);
    const [notiSuccess, setNotiSuccess] = useState(false);

    const onClickCreate = () => {
        navigate(`/cart-share-cal/${cartShareCalId}/create`);
    };

    const onClickUpdate = () => {
        navigate(`/cart-share-cal/${cartShareCalId}/update`);
    };
    const onClickCmplYn = (mbrId, cartShareCalId) => {
        updateCmplYn(cookies.mbrId, cartShareCalId, mbrId).then(() => {
            findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
                setCartShareCal(response.data.data);
            });
        });
    };

    const onClickOpenSheet = () => {
        setOpenOrdSheet(true);
    };
    const onClickCloseSheet = () => {
        setOpenOrdSheet(false);
    };
    const onClickNoti = () => {
        saveCartShareNoti(cookies.mbrId, cartShareCalId).then(() => {
            setNotiSuccess(true);
            setTimeout(function () {
                setNotiSuccess(false);
            }, 1500);
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
            openOrdSheet={openOrdSheet}
            onClickOpenSheet={onClickOpenSheet}
            onClickCloseSheet={onClickCloseSheet}
            onClickNoti={onClickNoti}
            notiSuccess={notiSuccess}
        />
    );
};

export default CartShareCalContainer;
