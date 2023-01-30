import styled from 'styled-components';
import OrdDetailItem from './OrdDetailItem';

const OrdShppInfo = ({ isSsgShpp }) => {
    return (
        <Container>
            <OrdStatTriangle style={{ borderBottomColor: isSsgShpp ? '#f7d047' : '#b3dc49' }} />
            <OrdStat style={{ background: isSsgShpp ? '#f7d047' : '#b3dc49' }}>
                <OrdStatTitle style={{ background: isSsgShpp ? '#f7d047' : '#b3dc49' }}>
                    주문이 전달되었습니다.
                </OrdStatTitle>
                <OrdStatContainer style={{ background: isSsgShpp ? '#f7d047' : '#b3dc49' }}>
                    <OrdStatItem>결제완료</OrdStatItem>
                    <OrdStatItem>상품준비중</OrdStatItem>
                    <OrdStatItem>점포출발</OrdStatItem>
                    <OrdStatItem>배송중</OrdStatItem>
                    <OrdStatItem>도착예정</OrdStatItem>
                    <OrdStatItem>배송완료</OrdStatItem>
                </OrdStatContainer>
            </OrdStat>
        </Container>
    );
};

export default OrdShppInfo;

const Container = styled.div`
    height: fit-content;
    width: 100%;
    text-align: center;
    margin-top: 0px;
`;

const OrdStat = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f7d047;
    height: fit-content;
    font-size: 14px;
    text-align: center;
`;

const OrdStatTitle = styled.div`
    width: 100%;
    background-color: #f7d047;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
`;

const OrdStatTriangle = styled.div`
    width: 0;
    height: 0;
    margin-left: 25px;
    border-bottom: 7px solid #f7d047;
    border-top: 7px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
`;

const OrdStatContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: solid 1px black;
    margin-top: 10px;

    div:nth-child(1) {
        background-color: black;
        color: white;
    }
`;

const OrdStatItem = styled.div`
    font-size: 12px;
    justify-content: center;
    padding: 10px 10px 10px 10px;
`;
