import Ord from '../../components/ord/Ord';
import { useEffect, useState } from 'react';
import { getOrdItemList } from '../../api/ord/ord';

const OrdContainer = ({ cartShareOrdId, cartShareCalId, regDts, ttlPaymtAtm, onClickCal }) => {
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
            let tradersShppOrdItemList = orderItemList.filter(ordItem => ordItem.shppCd === 'SSG_TRADERS_SHPP');

            console.log(response.data.data.cartShareOrdItemList);

            let ssgShppItemMap = new Map();
            let tradersShppItemMap = new Map();

            ssgShppOrdItemList.forEach(item => {
                let mbrNm = item.mbrNm;
                if (item.commYn === true) {
                    mbrNm = '공동';
                }

                if (ssgShppItemMap.has(mbrNm)) {
                    let tmp = ssgShppItemMap.get(mbrNm);
                    tmp.push(item);
                    ssgShppItemMap.set(mbrNm, tmp);
                } else {
                    ssgShppItemMap.set(mbrNm, new Array(item));
                }
            });

            setSsgShppOrdItemMap(ssgShppItemMap);

            tradersShppOrdItemList.forEach(item => {
                let mbrNm = item.mbrNm;

                if (item.commYn === true) {
                    mbrNm = '공동';
                }

                if (tradersShppItemMap.has(mbrNm)) {
                    let tmp = tradersShppItemMap.get(mbrNm);
                    tmp.push(item);
                    tradersShppItemMap.set(mbrNm, tmp);
                } else {
                    tradersShppItemMap.set(mbrNm, new Array(item));
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
            onClickCal={onClickCal}
            cartShareCalId={cartShareCalId}
        />
    );
};

export default OrdContainer;
