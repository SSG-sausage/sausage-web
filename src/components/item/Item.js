import styled from 'styled-components';

const Item = ({index, itemNm, brandNm, itemAmt, itemImgUrl, onClickItem, shppType}) => {

    return (
        <Container onClick={onClickItem}>

            <p id='index'>{index}</p>
            <img id='item' src={itemImgUrl} />

            <ShppCategory>
                <div>
                    쓱배송
                </div>
                <img src={require('../../assets/cart.png')} />
            </ShppCategory>

            <ItemLine />

            <ItemTitle>
                <div>
                    <b>{brandNm}</b> {itemNm}
                </div>

            </ItemTitle>

            <ItemAmt>
                <p>
                    {itemAmt.toLocaleString()}
                </p>
                <p>
                    원
                </p>
            </ItemAmt>

        </Container>
    );

};


export default Item;


const Container = styled.div`

  height: 280px;
  justify-self: center;
  margin-bottom: 50px;

  #index {
    font-weight: bold;
    margin-bottom: 10px;
  }

  #item {
    width: 130px;
    height: 130px;
    border-radius: 15px;
  }
  
  cursor: pointer;

`;

const ShppCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin-top: 7px;

  > img {
    width: 18px;
    height: 18px;
  }

  > div {
    background-color: #F7D047;
    padding: 3px;
    border-radius: 20px;

  }
`;

const ItemTitle = styled.div`

  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 13px;
  
  width: 130px;
`;

const ItemAmt = styled.div`

  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 14px;
  align-items: end;
  text-align: end;

  > p:first-child {
    font-weight: bold;
    margin-right: 5px;
    font-size: 18px;
  }

  > p:nth-child(2) {
    margin-bottom: 3px;
  }

`;


const ItemLine = styled.div`

  height: 1px;
  margin-top: 10px;
  background-color: #f2f2f2;
`;

