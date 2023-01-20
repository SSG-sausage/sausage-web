import styled from 'styled-components';

const BottomContainer = () => {
    return (
        <>
            <Container>
                <div id="left">대화하기</div>
                <div id="right">주문하기</div>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 390px;
    height: 55px;

    #left {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 125px;
        height: 55px;
        background: #6c78f0;
        font-weight: 400;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: 0.5px;
        color: #ffffff;
        border-radius: 0 0 0 20px;
    }

    #right {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 265px;
        height: 55px;
        background: #eb4f47;
        font-weight: 400;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: 0.5px;
        color: #ffffff;
        border-radius: 0 0 20px 0;
    }

    #inactive-order {
        background: #f5a7a3;
    }
`;

export default BottomContainer;
