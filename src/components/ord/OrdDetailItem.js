import styled from 'styled-components';

const OrdDetailItem = () => {
    return (
        <Container>
            <img id="item" src="https://sitem.ssgcdn.com/76/82/32/item/1000518328276_i1_1100.jpg" />

            <ItemTitle>
                <b>브랜드 이름</b> 상품명
            </ItemTitle>

            <ItemAmt>
                <p>5000</p>
                <p>원</p>
            </ItemAmt>
        </Container>
    );
};

export default OrdDetailItem;

const Container = styled.div`
    height: fit-content;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;

    #item {
        width: 100px;
        height: 100px;
        border-radius: 15px;
    }
`;

const ItemTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    margin-top: 10px;
    font-size: 9px;
`;

const ItemAmt = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    font-size: 10px;
    align-items: end;
    text-align: end;
    padding-left: 20px;

    > p:first-child {
        font-weight: bold;
        margin-right: 5px;
        font-size: 12px;
    }

    > p:nth-child(2) {
        margin-bottom: 2px;
    }
`;
