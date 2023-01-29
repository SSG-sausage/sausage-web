import styled from 'styled-components';
import OrdDetailItem from './OrdDetailItem';

const OrdDetailItemList = ({ mbrNm, itemList }) => {
    return (
        <Container>
            <OrdMbr>{mbrNm}</OrdMbr>
            <OrdDetailItemGridContainer>
                {itemList.map((it, index) => (
                    <OrdDetailItem
                        key={it.cartShareOrdItemId}
                        itemNm={it.itemNm}
                        itemId={it.itemId}
                        itemAmt={it.itemAmt}
                        itemQty={it.itemQty}
                    />
                ))}
            </OrdDetailItemGridContainer>
        </Container>
    );
};

export default OrdDetailItemList;

const Container = styled.div`
    height: fit-content;
    width: 100%;
    text-align: center;
`;

const OrdDetailItemGridContainer = styled.div`
    text-align: start;

    margin: 20px 0 20px 0;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-auto-rows: auto;
    overflow: scroll;
`;

const OrdMbr = styled.div`
    background-color: #d9d9d9;
    width: fit-content;
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    margin: 0px 0 0 15px;
`;
