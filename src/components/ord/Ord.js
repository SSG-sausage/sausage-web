import styled from 'styled-components';
import OrdDetailItem from './OrdDetailItem';
import OrdDetailItemList from './OrdDetailItemList';
import OrdShppInfo from './OrdShppInfo';

const Ord = ({ isSsgShpp, isClickedSsg, onClickSsgShpp, isClickedTradersShpp, onClickTradersShpp }) => {
    return (
        <Container>
            <TopNav>주문하기</TopNav>

            <OrdContainer>
                <OrdTitle>
                    <div>2023.00.00 &nbsp;&nbsp; 함께 장보기</div>
                    <div>정산 내역 확인하기 {'>'}</div>
                </OrdTitle>
                <TtlPaymtAmt>결제금액 17000원</TtlPaymtAmt>

                <OrdItemTitle onClick={onClickSsgShpp}>
                    <div>
                        <div>쓱</div>
                        <div> 쓱배송</div>
                    </div>
                    <p>배송지 정상벽 {'>'}</p>
                </OrdItemTitle>

                {isClickedSsg ? (
                    <>
                        <OrdShppInfo isSsgShpp={true} />
                        <OrdItem>
                            <OrdDetailItemList mbrNm="전미림" />
                            <OrdDetailItemList mbrNm="정상벽" />
                            <OrdDetailItemList mbrNm="정상벽" />
                        </OrdItem>
                    </>
                ) : (
                    <></>
                )}

                <OrdItemTitle onClick={onClickTradersShpp}>
                    <div>
                        <div style={{ background: '#b3dc49' }}>T</div>
                        <div> Emart Traders</div>
                    </div>
                    <p>배송지 정상벽 {'>'}</p>
                </OrdItemTitle>

                {isClickedTradersShpp ? (
                    <>
                        <OrdShppInfo isSsgShpp={false} />
                        <OrdItem>
                            <OrdDetailItemList mbrNm="전미림" />
                            <OrdDetailItemList mbrNm="정상벽" />
                            <OrdDetailItemList mbrNm="정상벽" />
                        </OrdItem>
                    </>
                ) : (
                    <></>
                )}
            </OrdContainer>
        </Container>
    );
};

export default Ord;

const Container = styled.div`
    justify-self: center;
    height: 792px;
    border-radius: 20px;
    background-color: #f9f9f9;
`;

const TopNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: solid 2px #f2f2f2;
`;

const OrdContainer = styled.div`
    height: 680px;
    margin: 30px 0px 0px 0px;
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

    div:nth-child(1) {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10px;
        padding-left: 15px;
    }

    div:nth-child(2) {
        font-size: 7px;
        color: gray;
        align-self: center;
        margin-bottom: 10px;
        padding-right: 15px;
    }
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
