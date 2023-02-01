import OrdList from '../../components/ord/OrdList';
import { useEffect, useState } from 'react';
import { createTmpOrd, getOrdList } from '../../api/ord/ord';
import OrdSuccess from '../../components/ord/OrdSuccess';
import { useLocation } from 'react-router-dom';
import OrdPaymt from '../../components/ord/OrdPaymt';

const OrdPaymtContainer = () => {
    const location = useLocation();

    return <OrdPaymt cartShareId={location.state.cartShareId} tmpOrdTtlPaymtAmt={location.state.tmpOrdTtlPaymtAmt} />;
};

export default OrdPaymtContainer;
