import React, { useState, useEffect, useRef } from 'react';
import { findDutchPay, updateCmplYn } from '../../api/dutchpay/dutchPay';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import DutchPay from '../../components/dutchpay/DutchPay';

const DutchPayContainer = () => {
    const navigate = useNavigate();
    const { dutchPayId } = useParams();
    const [dutchPay, setDutchPay] = useState({});
    const [cookies, setCookie] = useCookies(['mbrId']);

    const onClickCreate = () => {
        navigate(`/dutch-pay/${dutchPayId}/create`);
    };

    const onClickUpdate = () => {
        navigate(`/dutch-pay/${dutchPayId}/update`);
    };
    const onClickCmplYn = (mbrId, dutchPayId) => {
        updateCmplYn(cookies.mbrId, dutchPayId, mbrId).then(() => {
            findDutchPay(cookies.mbrId, dutchPayId).then(response => {
                setDutchPay(response.data.data);
            });
        });
    };

    useEffect(() => {
        findDutchPay(cookies.mbrId, dutchPayId).then(response => {
            setDutchPay(response.data.data);
        });
    }, []);
    return (
        <DutchPay
            onClickCreate={onClickCreate}
            dutchPay={dutchPay}
            onClickCmplYn={onClickCmplYn}
            onClickUpdate={onClickUpdate}
        />
    );
};

export default DutchPayContainer;
