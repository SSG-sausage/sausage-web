/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const CartShareCalOrdList = ({ ordList, onClickBack, onClickCal }) => {
    const formatDate = date => {
        return date.slice(0, 10).replaceAll('-', '.');
    };
    return (
        <OrdContainer>
            <OrdHeader>
                <div onClick={onClickBack} className="side">
                    <img className="arrow-back" src={require('../../assets/arrow-back.png')} />
                </div>
                <div className="title">정산 내역 생성</div>
                <div className="side"></div>
            </OrdHeader>
            <div className="desc">어느 주문에 대해 정산을 도와드릴까요?</div>
            <OrdContent>
                {ordList?.map((ord, index) => (
                    <div key={index}>
                        {ord.calStYn && (
                            <Ord className="cal-disable">
                                <div className="cal-item-header">
                                    <div>{formatDate(ord.cartShareOrdRcpDts)}</div>
                                    <div>{ord.cartShareNm}</div>
                                    <div>참여 멤버 {ord.cartShareMbrQty}명</div>
                                </div>
                                <div className="cal-item-content">
                                    <div>
                                        <img className="item-img" src={ord.repItemImgUrl} />
                                    </div>
                                    <div className="item-name">
                                        {ord.repItemNm} 외 {ord.ttlOrdItemQty}개
                                    </div>
                                    <div className="item-amt">결제금액: {ord.ttlPaymtAmt.toLocaleString()}원</div>
                                </div>
                                <div className="ord-no">주문번호: {ord.cartShareOrdNo}</div>
                            </Ord>
                        )}
                        {!ord.calStYn && (
                            <Ord className="cal-enable" onClick={() => onClickCal(ord.cartShareCalId)}>
                                <div className="cal-item-header">
                                    <div>{formatDate(ord.cartShareOrdRcpDts)}</div>
                                    <div>{ord.cartShareNm}</div>
                                    <div>참여 멤버 {ord.cartShareMbrQty}명</div>
                                </div>
                                <div className="cal-item-content">
                                    <div>
                                        <img className="item-img" src={ord.repItemImgUrl} />
                                    </div>
                                    <div className="item-name">
                                        {ord.repItemNm} 외 {ord.ttlOrdItemQty}개
                                    </div>
                                    <div className="item-amt">결제금액: {ord.ttlPaymtAmt.toLocaleString()}원</div>
                                </div>
                                <div className="ord-no">주문번호: {ord.cartShareOrdNo}</div>
                            </Ord>
                        )}
                    </div>
                ))}
            </OrdContent>
        </OrdContainer>
    );
};

const OrdContainer = styled.div`
    .desc {
        width: 390px;
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
        margin-bottom: 30px;
    }
`;
const OrdHeader = styled.div`
    width: 390px;
    height: 47px;
    display: flex;
    justify-content: space-between;
    line-height: 47px;
    align-items: center;

    .title {
        font-weight: 700;
        font-size: 20px;
    }

    .side {
        width: 50px;
        padding: 10px;
    }
`;
const Ord = styled.div`
    border: 1px solid #2d2d2d;
    border-radius: 20px;
    width: 356px;
    height: 102px;
    margin: auto;
    margin-bottom: 15px;

    .cal-item-header {
        display: flex;
        border-bottom: 1px solid #888888;
        justify-content: space-between;
        padding: 0px 4px;
        font-weight: 400;
        font-size: 13px;
        width: 242px;
        margin: 7px 10px;
    }
    .cal-item-content {
        display: flex;
    }
    .item-img {
        width: 47px;
        border-radius: 5px;
        margin-left: 17px;
        margin-right: 8px;
    }
    .item-name {
        font-size: 13px;
        margin: auto 0;
        width: 160px;
    }
    .item-amt {
        right: 0;
        font-size: 13px;
        text-align: right;
        margin: auto 0;
    }
    .ord-no {
        font-size: 13px;
        margin-left: 20px;
    }
`;
const OrdContent = styled.div`
    height: 650px;
    overflow: auto;
    .cal-disable {
        color: #d9d9d9;
        border: 1px solid #d9d9d9;
        .cal-item-header {
            display: flex;
            border-bottom: 1px solid #d9d9d9;
        }
        .item-img {
            opacity: 0.5;
        }
    }
    .cal-enable {
        cursor: pointer;
    }
`;
export default CartShareCalOrdList;
