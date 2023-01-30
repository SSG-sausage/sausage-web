import Ord from '../../components/ord/Ord';
import { useEffect, useState } from 'react';
import { getOrdItemList } from '../../api/ord/ord';

const OrdContainer = ({ cartShareOrdId, regDts, ttlPaymtAtm }) => {
    const [isClickedSggShpp, setClickedSsgshpp] = useState(false);
    const [isClickedTradersShpp, setClickedTradersShpp] = useState(false);
    const [ssgShppOrdItemMap, setSsgShppOrdItemMap] = useState(new Map());
    const [tradersShppOrdItemMap, setTradersShppOrdItemMap] = useState(new Map());

    const onClickSsgShpp = () => {
        setClickedSsgshpp(!isClickedSggShpp);
    };

    const onClickTradersShpp = () => {
        setClickedTradersShpp(!isClickedTradersShpp);
    };

    let cartShareId = 1;

    useEffect(() => {
        getOrdItemList(cartShareId, cartShareOrdId).then(response => {
            let orderItemList = response.data.data.cartShareOrdItemList;
            let ssgShppOrdItemList = orderItemList.filter(ordItem => ordItem.shppCd === 'SSG_SHPP');
            let tradersShppOrdItemList = orderItemList.filter(ordItem => ordItem.shppCd === 'EMART_TRADERS_SHPP');

            console.log(response.data.data.cartShareOrdItemList);

            let ssgShppItemMap = new Map();
            let tradersShppItemMap = new Map();

            ssgShppOrdItemList.forEach(item => {
                let id = item.mbrId;

                if (item.commYn === true) {
                    id = '공통';
                }

                if (ssgShppItemMap.has()) {
                    let tmp = ssgShppItemMap.get(id);
                    tmp.push(item);
                    ssgShppItemMap.set(id, tmp);
                } else {
                    ssgShppItemMap.set(id, new Array(item));
                }
            });

            setSsgShppOrdItemMap(ssgShppItemMap);

            tradersShppOrdItemList.forEach(item => {
                let id = item.mbrId;

                if (item.commYn === true) {
                    id = '공통';
                }

                if (tradersShppItemMap.has(id)) {
                    let tmp = tradersShppItemMap.get(id);
                    tmp.push(item);
                    tradersShppItemMap.set(id, tmp);
                } else {
                    tradersShppItemMap.set(id, new Array(item));
                }
            });

            setTradersShppOrdItemMap(tradersShppItemMap);
        });
    }, []);

    return (
        <Ord
            isClickedSggShpp={isClickedSggShpp}
            onClickSsgShpp={onClickSsgShpp}
            isClickedTradersShpp={isClickedTradersShpp}
            onClickTradersShpp={onClickTradersShpp}
            regDts={regDts}
            ttlPaymtAtm={ttlPaymtAtm}
            ssgShppOrdItemMap={ssgShppOrdItemMap}
            tradersShppOrdItemMap={tradersShppOrdItemMap}
        />
    );
};

export default OrdContainer;
