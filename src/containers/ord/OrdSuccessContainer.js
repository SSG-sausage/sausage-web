import OrdList from '../../components/ord/OrdList';
import { useEffect, useState } from 'react';
import { createTmpOrd, getOrdList } from '../../api/ord/ord';
import OrdSuccess from '../../components/ord/OrdSuccess';
import { useLocation } from 'react-router-dom';

const OrdSuccessContainer = () => {
    const location = useLocation();

    // const { cartShareCalId, cartShareOrdId, ttlPaymtAmt } = useLocation();

    console.log(location.state.cartShareCalId);

    return (
        <OrdSuccess
            cartShareOrdId={location.state.cartShareOrdId}
            ttlPaymtAmt={location.state.ttlPaymtAmt.toLocaleString()}
            cartShareCalId={location.state.cartShareCalId}
        />
    );
};

export default OrdSuccessContainer;
