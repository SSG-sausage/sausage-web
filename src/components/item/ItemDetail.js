import styled from 'styled-components';
import SearchBox from './SearchBox';
import ItemPurchaseModal from './ItemPurchaseModal';
import { useNavigate } from 'react-router-dom';
import ItemModal from './ItemModal';

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
    isNotiModalon,
    cartItemQty,
    isNewItemYn,
    shppCd,
    isItemModalOn,
    changeItemModalOn,
}) => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    };

    return (
        <>
            {isItemModalOn ? <ItemModal changeItemModalOn={changeItemModalOn} /> : <></>}
            <ItemDetailContainer>
                <div>
                    <SearchBox />

                    <BackBnt className="arrow-back" src={require('../../assets/arrow-back.png')} onClick={backClick} />

                    <ItemImg src={itemImgUrl} />

                    {shppCd === 'SSG_SHPP' ? (
                        <>
                            <ShppCategory>쓱배송</ShppCategory>
                        </>
                    ) : (
                        <>
                            <ShppCategory style={{ background: '#b3dc49' }}>traders</ShppCategory>
                        </>
                    )}

                    <ItemTitle>
                        <div>{itemBrandNm}</div>
                        <div>{itemNm}</div>
                    </ItemTitle>

                    <ItemAmt>
                        <b>{itemAmt.toLocaleString()}</b> 원
                    </ItemAmt>
                </div>

                {isNotiModalon === true ? (
                    <>
                        {isNewItemYn === true ? (
                            <>
                                <Noti class="share-noti">
                                    한 번 더 담으셨네요!
                                    <br />
                                    담긴 수량이 {cartItemQty}개가 되었습니다.
                                </Noti>
                            </>
                        ) : (
                            <>
                                <Noti class="share-noti">소시지에 상품을 담았습니다.</Noti>
                            </>
                        )}
                    </>
                ) : (
                    <></>
                )}

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
        </>
    );
};

const ItemDetailContainer = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
`;

const BackBnt = styled.img`
    position: absolute;
    top: 80px;
    left: 20px;
    cursor: pointer;
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
    padding: 3px 7px 3px 7px;
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

const Noti = styled.div`
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    width: 358px;
    height: 48px;
    border-radius: 10px;
    color: white;
    margin: auto;
    text-align: center;
    margin-bottom: 15px;
    font-size: 12px;
    text-align: center;
    justify-content: center;
`;

export default ItemDetail;
