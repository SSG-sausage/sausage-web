import OrdList from '../../components/ord/OrdList';
import { useEffect, useState } from 'react';
import { getOrdList } from '../../api/ord/ord';
import { useParams, useNavigate } from 'react-router-dom';

const OrdListContainer = () => {
    const navigate = useNavigate();

    const [ordList, setOrdList] = useState([]);

    let cartShareId = 1;

    const onClickCal = cartshareCalId => {
        navigate(`/cart-share-cal/${cartshareCalId}`);
    };

    useEffect(() => {
        getOrdList(cartShareId).then(response => {
            setOrdList(response.data.data.cartShareOdrList);
            console.log(response.data.data.cartShareOdrList);
        });
    }, []);

    return <OrdList ordList={ordList} onClickCal={onClickCal} />;
};

export default OrdListContainer;
