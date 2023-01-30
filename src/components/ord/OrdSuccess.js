import styled from 'styled-components';

const OrdSuccess = ({}) => {
    return (
        <Container>
            <TopNav>주문완료</TopNav>
            <MainTitle>주문이 완료되었습니다.</MainTitle>
            <Space />
            <ShppInfo>
                <div>받는 분 정보</div>
                <div>전미림/010-1023-1251</div>
                <div>센터필드</div>
            </ShppInfo>
            <Space />
            <TtlPaymtAmt>결제금액: 17,000원</TtlPaymtAmt>
            <Space />
            <BntContainer>
                <KeepShpBnt>계속 쇼핑하기</KeepShpBnt>
                <BntSubContainer>
                    <button>주문상품 상세보기</button>
                    <button>쓱총무 이용하기</button>
                </BntSubContainer>
            </BntContainer>
        </Container>
    );
};

export default OrdSuccess;

const Container = styled.div`
    justify-self: center;
    height: 792px;
    border-radius: 20px;
    background-color: white;
    overflow: auto;
`;

const TopNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: solid 2px #f2f2f2;
`;

const MainTitle = styled.div`
    width: 100%;
    height: 80px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: white;
    text-align: center;
    justify-items: center;
`;

const Space = styled.div`
    width: 100%;
    height: 10px;
    background-color: #f9f9f9;
`;

const ShppInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 30px 0 30px 20px;

    > div:nth-child(1) {
        font-weight: bold;
        font-size: 20px;
    }

    > div:nth-child(2) {
        font-weight: bold;
        font-size: 14px;
        margin-top: 20px;
    }

    > div:nth-child(3) {
        font-size: 14px;
        margin-top: 5px;
    }
`;

const TtlPaymtAmt = styled.div`
    width: 100%;
    font-size: 20px;
    display: flex;
    font-weight: bold;
    margin: 30px 0 30px 20px;
`;

const BntContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const KeepShpBnt = styled.button`
    width: 160px;
    font-weight: 14px;
    line-height: 40px;
    height: 40px;
    background: black;
    color: white;
    text-align: center;
    border: none;
    margin-top: 20px;
    border-radius: 30px;

    cursor: pointer;
`;

const BntSubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
        width: 160px;
        font-weight: 14px;
        line-height: 40px;
        height: 40px;
        text-align: center;
        cursor: pointer;

        margin-top: 20px;
        border-radius: 30px;
    }

    > button:nth-child(1) {
        background: white;
        border: solid 1px #c4c4c4;
        color: #c4c4c4;

        :hover {
            background-color: #c4c4c4;
            color: white;
        }
    }

    > button:nth-child(2) {
        background: white;
        border: solid 1px #3a94fa;
        color: #3a94fa;
        :hover {
            background-color: #3a94fa;
            color: white;
        }
    }
`;
