import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DutchPayCreateOptBS from '../../components/dutchpay/DutchPayCreateOptBS';
import DutchPayCreateOptDN from '../../components/dutchpay/DutchPayCreateOptDN';
import DutchPayCreateOptFR from '../../components/dutchpay/DutchPayCreateOptFR';
import DutchPayCreate from '../../components/dutchpay/DutchPayCreate';

const DutchPayContainer = () => {
    const navigate = useNavigate();
    const [opt, setOpt] = useState('by-section');
    const optList = ['by-section', 'divide-by-n', 'free'];

    const onClickOptBtn = e => {
        const selectedClass = 'selected';
        for (let i = 0; i < 3; i++) {
            document.getElementById(optList[i]).classList.remove(selectedClass);
        }
        e.target.classList.add(selectedClass);
        setOpt(e.target.id);
    };

    const onClickBack = cartShareOrdId => {
        navigate(`/cart-share-ord/${cartShareOrdId}/dutch-pay`);
    };

    return (
        <div>
            <DutchPayCreate onClickOptBtn={onClickOptBtn} onClickBack={onClickBack} />
            {opt === 'by-section' && <DutchPayCreateOptBS />}
            {opt === 'divide-by-n' && <DutchPayCreateOptDN />}
            {opt === 'free' && <DutchPayCreateOptFR />}
        </div>
    );
};

export default DutchPayContainer;
