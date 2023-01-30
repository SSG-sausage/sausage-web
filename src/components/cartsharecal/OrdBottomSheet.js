/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOrdItemList } from '../../api/ord/ord';
import OrdBottom from '../ord/OrdBottom';

const OrdBottomSheet = ({ cartShareOrdId, onClickCloseSheet }) => {
    const [ssgShppOrdItemMap, setSsgShppOrdItemMap] = useState(new Map());
    const [tradersShppOrdItemMap, setTradersShppOrdItemMap] = useState(new Map());
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
        <>
            <SheetContainer onClick={onClickCloseSheet}></SheetContainer>
            <Sheet>
                <div className="sheet-header">
                    <div className="sheet-header-border"></div>
                </div>
                <div className="sheet-title">
                    <div className="sheet-title-side"></div>
                    <div className="sheet-title-name">주문 상품</div>
                    <div className="sheet-title-side close-btn" onClick={onClickCloseSheet}>
                        <img src={require('../../assets/close.png')} />
                    </div>
                </div>
                <OrdBottom ssgShppOrdItemMap={ssgShppOrdItemMap} tradersShppOrdItemMap={tradersShppOrdItemMap} />
            </Sheet>
        </>
    );
};

const SheetContainer = styled.div`
    position: absolute;
    bottom: 0px;
    border-radius: 20px;
    width: 390px;
    height: 844px;
    background: transparent;
`;

const Sheet = styled.div`
    width: 390px;
    height: 640px;
    background: white;
    border-radius: 30px 30px 20px 20px;
    position: absolute;
    z-index: 1;
    bottom: 0px;
    box-shadow: rgb(0 0 0 / 20%) 0px -8px 6px -6px;

    .sheet-header {
        display: flex;
        justify-content: center;
    }

    .sheet-header-border {
        margin-top: 11px;
        width: 59px;
        height: 4px;
        background: #d9d9d9;
        border-radius: 100px;
    }
    .sheet-title {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        font-weight: 700;
        font-size: 20px;
        height: 47px;
        line-height: 47px;
    }
    .sheet-title-side {
        width: 40px;
    }
    .sheet-title-side img {
        width: 22px;
    }
    .close-btn {
        cursor: pointer;
    }
`;
export default OrdBottomSheet;
