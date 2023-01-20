import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DutchPay from '../../components/dutchpay/DutchPay';

const DutchPayContainer = () => {
    const navigate = useNavigate();
    let { cartShareOrdId } = useParams();

    const onClickCreate = cartShareOrdId => {
        navigate(`/cart-share-ord/${cartShareOrdId}/dutch-pay/create`);
    };
    return <DutchPay onClickCreate={onClickCreate} cartShareOrdId={cartShareOrdId} />;
};

export default DutchPayContainer;
