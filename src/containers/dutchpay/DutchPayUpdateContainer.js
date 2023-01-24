import React, { useState, useEffect, useRef } from 'react';
import { findDutchPay } from '../../api/dutchpay/dutchPay';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import DutchPayUpdate from '../../components/dutchpay/DutchPayUpdate';

const DutchPayUpdateContainer = () => {
    const navigate = useNavigate();
    const { dutchPayId } = useParams();
    const [cookies, setCookie] = useCookies(['mbrId']);

    return <DutchPayUpdate />;
};

export default DutchPayUpdateContainer;
