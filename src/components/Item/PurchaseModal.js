import styled from 'styled-components';
import CartShare from '../CartShare';

const PurchaseModal = ({itemBrandNm ,itemNm, itemAmt, itemQty, setItemQty}) => {

    return (

        <Modal>

            <Item>

                <ItemTitle>
                    <b>{itemBrandNm}</b> {itemNm}
                </ItemTitle>

                <ItemAmtBox>

                    <div>

                        <MinusBox>
                            -
                        </MinusBox>

                        <QtyBox>
                            {itemQty}
                        </QtyBox>

                        <PlusBox>
                            +
                        </PlusBox>
                    </div>

                    <div>
                        {itemAmt} 원
                    </div>

                </ItemAmtBox>

            </Item>

            <TotalAmt>

                <p>
                    원
                </p>

                <p>
                    {itemAmt * itemQty}
                </p>

                <p>
                    총 합계
                </p>


            </TotalAmt>

            <Buttons>
                <CartShareButton>
                    장바구니
                </CartShareButton>
                <PurchaseButton>
                    바로구매
                </PurchaseButton>

            </Buttons>



        </Modal>

    );
};



const Modal = styled.div`

  width: 100%;
  height: 200px;
  background-color: white;
  box-shadow: 0px -4px 7px -5px gray;
  border-radius: 20px;
  
`;

const Item = styled.div`

  background-color: #F5F5F5;
  height: 60px;
  border-radius: 10px;
  margin: 30px 10px 0 10px;
  padding: 10px 17px 0 17px;

`;

const ItemTitle = styled.div`
  font-size: 13px;
  
`;

const ItemAmtBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 13px;
  padding-right: 7px;
`;

const MinusBox = styled.button`
  width: 20px;
  height: 18px;
  background-color: white;
  text-align: center;
  margin-right: 5px;
  border: none;
  cursor: pointer;


`;

const QtyBox = styled.button`
  width: 20px;
  height: 18px;
  background-color: white;
  text-align: center;
  margin-right: 5px;
  font-size: 15px;
  border: none;
`;

const PlusBox = styled.button`

  width: 20px;
  height: 18px;
  background-color: white;
  text-align: center;
  border: none;
  cursor: pointer;


`;

const TotalAmt = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 30px;
  margin-top: 10px;
  font-size: 20px;
  align-content: center;
  text-align: center;

  > p:nth-child(3) {
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  > p:nth-child(2) {
    font-weight: bold;
    color: #EB4F47;
    margin-right: 5px;
    margin-left: 7px;
  }

  > p:nth-child(1) {
    color: #EB4F47;
    font-size: 9px;
    display: flex;
    align-items: center;
  }

`

const Buttons = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  border: none;
  margin-top: 23px;
`


const CartShareButton = styled.button`
  width: 50%;
  background-color: #2D2D2D;
  padding: 13px;
  border: none;
  cursor: pointer;
  color: white;

  border-bottom-left-radius: 20px;

  :hover {
    background-color: black;
  }

`;

const PurchaseButton = styled.button`
  width: 50%;
  background-color: #EB4F47;
  padding: 13px;
  border: none;
  cursor: pointer;
  color: white;
  
  border-bottom-right-radius: 20px;

  :hover {
    background-color: #ff3905;
  }

`;

export default PurchaseModal;