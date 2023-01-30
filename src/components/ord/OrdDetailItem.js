import styled from 'styled-components';

const OrdDetailItem = ({ itemId, itemNm, itemAmt, itemQty }) => {
    return (
        <Container>
            <img id="item" src="https://sitem.ssgcdn.com/76/82/32/item/1000518328276_i1_1100.jpg" />

            <ItemTitle>
                <b>{itemNm}</b>
            </ItemTitle>

            <ItemAmt>
                <p>
                    <b>{itemAmt}</b>원 &nbsp;{itemQty}개
                </p>
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
        margin-right: 5px;
        font-size: 12px;
    }
`;
