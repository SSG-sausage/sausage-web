import Ord from '../../components/ord/Ord';
import { useEffect, useState } from 'react';

const OrdListContainer = () => {
    const [isClickedSggShpp, setClickedSsgshpp] = useState(false);
    const [isClickedTradersShpp, setClickedTradersShpp] = useState(false);

    const onClickSsgShpp = () => {
        setClickedSsgshpp(!isClickedSggShpp);
    };

    const onClickTradersShpp = () => {
        setClickedTradersShpp(!isClickedTradersShpp);
    };

    return (
        <Ord
            isClickedSsg={isClickedSggShpp}
            onClickSsgShpp={onClickSsgShpp}
            isClickedTradersShpp={isClickedTradersShpp}
            onClickTradersShpp={onClickTradersShpp}
        />
    );
};

export default OrdListContainer;
