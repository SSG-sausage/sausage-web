import OrdList from '../../components/ord/OrdList';
import { useEffect, useState } from 'react';
import { getOrdList } from '../../api/ord/ord';

const OrdListContainer = () => {
    const [ordList, setOrdList] = useState([]);

    let cartShareId = 1;

    useEffect(() => {
        getOrdList(cartShareId).then(response => {
            setOrdList(response.data.data.cartShareOdrList);
            console.log(response.data.data.cartShareOdrList);
        });
    }, []);

    return <OrdList ordList={ordList} />;
};

export default OrdListContainer;
