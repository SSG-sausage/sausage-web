import styled from 'styled-components';
import SearchBox from './SearchBox';
import ItemPurchaseModal from './ItemPurchaseModal';

const ItemDetail = ({
    itemImgUrl,
    itemBrandNm,
    itemNm,
    itemAmt,
    isPurchaseModalOn,
    setPurchaseModalOn,
    itemQty,
    plusItemQty,
    minusItemQty,
    onClickSaveCartShareButton,
}) => {
    return (
        <ItemDetailContainer>
            <div>
                <SearchBox />

                <ItemImg src={itemImgUrl} />

                <ShppCategory>쓱배송</ShppCategory>

                <ItemTitle>
                    <div>{itemBrandNm}</div>
                    <div>{itemNm}</div>
                </ItemTitle>

                <ItemAmt>
                    <b>{itemAmt.toLocaleString()}</b> 원
                </ItemAmt>
            </div>

            <ButtonContainer>
                {isPurchaseModalOn ? (
                    <ItemPurchaseModal
                        itemNm={itemNm}
                        itemBrandNm={itemBrandNm}
                        itemAmt={itemAmt}
                        itemQty={itemQty}
                        plusItemQty={plusItemQty}
                        minusItemQty={minusItemQty}
                        onClickSaveCartShareButton={onClickSaveCartShareButton}
                    />
                ) : (
                    <PurchaseButton onClick={setPurchaseModalOn}>구매하기</PurchaseButton>
                )}
            </ButtonContainer>
        </ItemDetailContainer>
    );
};

const ItemDetailContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ItemImg = styled.img`
    margin-top: 20px;
    width: 100%;
`;

const ShppCategory = styled.div`
    width: fit-content;
    font-size: 12px;
    font-weight: bold;
    margin-top: 7px;
    margin-left: 20px;
    background-color: #f7d047;
    padding: 3px;
    border-radius: 20px;
`;

const ItemTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 13px;

    div:first-child {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

const ItemAmt = styled.div`
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;
`;

const PurchaseButton = styled.button`
    width: 390px;
    background-color: #eb4f47;
    padding: 13px;
    border: none;
    cursor: pointer;
    color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 52px;

    :hover {
        background-color: #ff3905;
    }
`;

export default ItemDetail;
