import React, { useState, useEffect, useRef } from 'react';
import { findDutchPay } from '../../api/dutchpay/dutchPay';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import DutchPay from '../../components/dutchpay/DutchPay';

const DutchPayContainer = () => {
    const navigate = useNavigate();
    const { dutchPayId } = useParams();
    const [dutchPay, setDutchPay] = useState({});
    const [cookies, setCookie] = useCookies(['mbrId']);

    const onClickCreate = dutchPayId => {
        navigate(`/dutch-pay/${dutchPayId}/create`);
    };

    useEffect(() => {
        findDutchPay(cookies.mbrId, dutchPayId).then(response => {
            setDutchPay(response.data.data);
        });
    }, []);
    return <DutchPay onClickCreate={onClickCreate} dutchPay={dutchPay} mbrId={cookies.mbrId} />;
};

export default DutchPayContainer;
