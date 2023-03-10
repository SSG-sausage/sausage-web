import styled from 'styled-components';
import OrdDetailItem from './OrdDetailItem';
import OrdDetailItemList from './OrdDetailItemList';
import OrdShppInfo from './OrdShppInfo';

const Ord = ({
    isClickedSggShpp,
    onClickSsgShpp,
    isClickedTradersShpp,
    onClickTradersShpp,
    regDts,
    ttlPaymtAtm,
    ssgShppOrdItemMap,
    cartShareOrdNo,
    tradersShppOrdItemMap,
    onClickCal,
    cartShareCalId,
}) => {
    return (
        <Container>
            <OrdTitle>
                <LeftTitle>
                    <div>
                        <RegDts>{regDts}</RegDts>
                        <p>함께 장보기</p>
                    </div>
                    <OrdNo id="OrdNo">주문번호 : {cartShareOrdNo}</OrdNo>
                </LeftTitle>
                <RightTitle onClick={() => onClickCal(cartShareCalId)}>정산 내역 확인하기 {'>'}</RightTitle>
            </OrdTitle>
            <TtlPaymtAmt>결제금액 {ttlPaymtAtm}</TtlPaymtAmt>

            <OrdItemTitle onClick={onClickSsgShpp}>
                <div>
                    <div>쓱</div>
                    <div> 쓱배송</div>
                </div>
                <p>배송지 센터필드{'>'}</p>
            </OrdItemTitle>

            {isClickedSggShpp ? (
                <>
                    <OrdShppInfo isSsgShpp={true} />
                    <OrdItem>
                        {Array.from(ssgShppOrdItemMap.keys())
                            .sort(function (a, b) {
                                return a < b ? -1 : a > b ? 1 : 0;
                            })
                            .map((it, index) => (
                                <OrdDetailItemList key={it} mbrNm={it} itemList={ssgShppOrdItemMap.get(it)} />
                            ))}
                    </OrdItem>
                </>
            ) : (
                <></>
            )}

            <OrdItemTitle onClick={onClickTradersShpp}>
                <div>
                    <div style={{ background: '#b3dc49' }}>T</div>
                    <div> 쓱배송 Traders</div>
                </div>
                <p>배송지 센터필드 {'>'}</p>
            </OrdItemTitle>

            {isClickedTradersShpp ? (
                <>
                    <OrdShppInfo isSsgShpp={false} />
                    <OrdItem>
                        {Array.from(tradersShppOrdItemMap.keys())
                            .sort(function (a, b) {
                                return a < b ? -1 : a > b ? 1 : 0;
                            })
                            .map((it, index) => (
                                <OrdDetailItemList key={it} mbrNm={it} itemList={tradersShppOrdItemMap.get(it)} />
                            ))}
                    </OrdItem>
                </>
            ) : (
                <></>
            )}
        </Container>
    );
};

export default Ord;

const Container = styled.div`
    height: fit-content;
    margin: 0px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: auto;
`;

const OrdTitle = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 30px 0px 10px 0px;
    border-bottom: solid 1px #f2f2f2;
`;

const LeftTitle = styled.div`
    font-size: 15px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;

    div {
        display: flex;
        flex-direction: row;
    }

    p {
        font-size: 13px;
    }
`;

const OrdNo = styled.div`
    font-size: 11px;
    margin-top: 3px;
    margin-bottom: 3px;
    color: gray;
`;

const RightTitle = styled.div`
    font-size: 7px;
    color: gray;
    align-self: center;
    margin-bottom: 13px;
    padding-right: 15px;
    cursor: pointer;
`;

const RegDts = styled.div`
    font-weight: bold;
    margin-right: 10px;
`;

const TtlPaymtAmt = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin: 0 20px 20px 20px;
`;

const OrdItem = styled.div`
    font-size: 10px;
    margin-top: 20px;
`;

const OrdItemTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 10px;
    padding: 13px 15px 13px 20px;
    align-items: center;
    margin: 5px 0 5px 0;
    cursor: pointer;

    :hover {
        background-color: #f6f6f6;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;

        div:nth-child(1) {
            width: 25px;
            height: 25px;
            font-size: 15px;
            background-color: #f7d047;
            border-radius: 20px;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }

        div:nth-child(2) {
            font-size: 13px;
            justify-content: center;
            align-items: center;
            padding-left: 5px;
            font-weight: bold;
        }
    }

    p:nth-child(1) {
        font-size: 13px;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
        color: gray;
    }
`;
