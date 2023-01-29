import OrdList from '../../components/ord/OrdList';
import { useEffect, useState } from 'react';
import { getOrdList } from '../../api/ord/ord';
import OrdSuccess from '../../components/ord/OrdSuccess';

const OrdSuccessContainer = () => {
    return <OrdSuccess />;
};

export default OrdSuccessContainer;
