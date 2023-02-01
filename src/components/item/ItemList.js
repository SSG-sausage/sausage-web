/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import Item from './Item';
import ItemModal from './ItemModal';
import SearchBox from './SearchBox';

const ItemList = ({
    itemList,
    onClickItem,
    isNotiModalon,
    isNewItemYn,
    cartItemQty,
    onClickSaveCartShareButton,
    isItemModalOn,
    changeItemModalOn,
}) => {
    return (
        <>
            {isItemModalOn ? <ItemModal changeItemModalOn={changeItemModalOn} /> : <></>}
            <SearchBox />
            <ItemRankingTitle>상품 랭킹</ItemRankingTitle>

            <RankingContainer>
                {itemList.map((it, index) => (
                    <Item
                        key={it.itemId}
                        itemId={it.itemId}
                        index={index + 1}
                        itemNm={it.itemNm}
                        itemBrandNm={it.itemBrandNm}
                        itemImgUrl={it.itemImgUrl}
                        itemAmt={it.itemAmt.toLocaleString()}
                        onClickItem={() => onClickItem(it.itemId)}
                        brandNm={it.itemBrandNm}
                        shppCd={it.shppCd}
                        onClickSaveCartShareButton={onClickSaveCartShareButton}
                    />
                ))}
            </RankingContainer>
            <ModalContainer>
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
            </ModalContainer>
        </>
    );
};

const ItemRankingTitle = styled.p`
    margin: 40px 20px 50px 20px;

    text-align: start;
    margin-bottom: 30px;
    font-weight: bold;
`;

const RankingContainer = styled.div`
    text-align: start;
    height: 630px;

    margin: 20px 0px 50px 0px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-auto-rows: auto;
    overflow: scroll;
`;

const ModalContainer = styled.div`
    position: relative;
`;

const Noti = styled.div`
    position: absolute;
    top: -90px;
    left: 15px;
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

export default ItemList;
