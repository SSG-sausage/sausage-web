/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import Item from './Item';
import SearchBox from './SearchBox';

const ItemList = ({ itemList, onClickItem }) => {
    return (
        <>
            <SearchBox />

            <ItemRankingTitle>상품 랭킹</ItemRankingTitle>

            <RankingContainer>
                {itemList.map((it, index) => (
                    <Item
                        key={it.itemId}
                        index={index + 1}
                        itemNm={it.itemNm}
                        itemBrandNm={it.itemBrandNm}
                        itemImgUrl={it.itemImgUrl}
                        itemAmt={it.itemAmt.toLocaleString()}
                        onClickItem={() => onClickItem(it.itemId)}
                        brandNm={it.itemBrandNm}
                    />
                ))}
            </RankingContainer>
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

export default ItemList;
