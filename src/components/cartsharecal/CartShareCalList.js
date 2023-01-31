import styled from 'styled-components';
import SearchBox from '../item/SearchBox';

const CartShareCalList = ({ cartShareCalList, onClickBack, onClickCal, onClickCreate, mastrYn }) => {
    const formatDate = date => {
        return date.slice(0, 10).replaceAll('-', '.');
    };
    return (
        <CalListContainer>
            <SearchBox />
            <CalHeader>
                <div onClick={onClickBack} class="side">
                    <img className="arrow-back" src={require('../../assets/arrow-back.png')} />
                </div>
                <div>쓱총무</div>
                <div className="side"></div>
            </CalHeader>
            <CalList>
                <div className="title">정산 History</div>
                <div className="cal-list-content">
                    {cartShareCalList?.length === 0 && <div class="empty-content">정산 내역이 없습니다.</div>}
                    {cartShareCalList?.map((cal, index) => (
                        <CalItem key={cal} onClick={() => onClickCal(cal.cartShareCalId)}>
                            <div className="cal-item-left">
                                <div className="cal-item-header">
                                    <div class="cal-item-dt">{formatDate(cal.cartShareCalStDts)}</div>
                                    <div>{cal.cartShareNm}</div>
                                    <div>참여 멤버 {cal.mbrNum}명</div>
                                </div>
                                <div className="cal-item-paymt">결제금액: {cal.ttlPaymtAmt.toLocaleString()}원</div>
                                <div className="cal-item-amt">총 정산 금액: {cal.calAmt.toLocaleString()}원</div>
                                <div className="cal-item-ord">주문번호: {cal.cartShareOrdNo}</div>
                            </div>
                            <div className="cal-item-right">
                                {cal.cmplYn && <div className="cal-item-cmpl-y">정산완료</div>}
                                {!cal.cmplYn && <div className="cal-item-cmpl-n">정산완료</div>}
                                <div className="cal-item-arrow">
                                    <img src={require('../../assets/arrow.png')} />
                                </div>
                            </div>
                        </CalItem>
                    ))}
                </div>
            </CalList>
            {mastrYn && <CalFooter onClick={onClickCreate}>쓱총무 도움받기</CalFooter>}
        </CalListContainer>
    );
};
const CalListContainer = styled.div`
    position: relative;
    width: 390px;
    height: 797px;
`;
const CalHeader = styled.div`
    width: 390px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .side {
        width: 24px;
        margin: 0px 14px;
    }
    img {
        cursor: pointer;
    }
    div {
        display: flex;
        align-items: center;
        padding-top: 1px;
    }
    box-shadow: 0 4px 2px -2px #0000001c;
`;
const CalList = styled.div`
    overflow: auto;
    height: 650px;
    .title {
        font-size: 16px;
        text-align: center;
        height: 46px;
        line-height: 46px;
    }
    .cal-list-content {
        overflow: auto;
    }
    .empty-content {
        color: #888888;
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        margin-top: 207px;
    }
`;
const CalItem = styled.div`
    cursor: pointer;

    width: 356px;
    height: 137px;
    padding: 15px 23px;
    border: 1px solid #a2a1b4;
    border-radius: 20px;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: 15px;
    color: #888888;
    display: flex;
    .cal-item-left {
        width: 242px;
    }
    .cal-item-header {
        display: flex;
        border-bottom: 1px solid #888888;
        justify-content: space-between;
        padding: 0px 4px;
        font-weight: 400;
        font-size: 13px;
    }
    .cal-item-paymt {
        margin-top: 15px;
        font-size: 13px;
        font-weight: 400;
    }
    .cal-item-amt {
        margin-top: 5px;
        font-weight: 400;
        font-size: 14px;
    }
    .cal-item-ord {
        margin-top: 22px;
        font-size: 13px;
    }
    .cal-item-right {
        margin-left: 40px;
    }
    .cal-item-cmpl-y {
        color: white;
        background: #3a94fa;
        border: 1px solid #3a94fa;
        border-radius: 15px;
        width: 50px;
        height: 22px;
        font-size: 10px;
        line-height: 22px;
        text-align: center;
    }
    .cal-item-cmpl-n {
        color: #3a94fa;
        border: 1px solid #3a94fa;
        border-radius: 15px;
        width: 50px;
        height: 22px;
        font-size: 10px;
        line-height: 22px;
        text-align: center;
    }
    .cal-item-arrow {
        text-align: right;
        margin-top: 24px;
    }
`;
const CalFooter = styled.div`
    position: absolute;
    bottom: 0px;
    width: 390px;
    color: white;
    background: #3a94fa;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    height: 57px;
    line-height: 57px;
    cursor: pointer;
    border-radius: 0px 0px 20px 20px;
`;
export default CartShareCalList;
