/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const CartShareDetail = ({ cartShareData }) => {
    return (
        <CartShareDetailContainer>
            <CartShareDetailWrapper>
                <CartShareDetailTitle>
                    <h2>CartShareDetail</h2>
                </CartShareDetailTitle>
                <div>
                    cartShareId: {cartShareData.cartShareId}
                    <br />
                    mastrMbrId: {cartShareData.mastrMbrId}
                    <br />
                    mbrIdList: {cartShareData.mbrIdList}
                    <br />
                    cartShareNm: {cartShareData.cartShareNm}
                    <br />
                    cartShareAddr: {cartShareData.cartShareAddr}
                    <br />
                </div>
                <br />
                <br />
                <div>
                    공통 상품
                    <br />
                    {cartShareData.commonItemList.map(it => {
                        return (
                            <li>
                                cartShareItemId: {it.cartShareItemId}, itemId: {it.itemId}, itemQty: {it.itemQty}
                            </li>
                        );
                    })}
                </div>
                <br />
                <br />
                <div>
                    개별 상품
                    <br />
                    {cartShareData.personalItemList.map(it => {
                        return (
                            <div>
                                <li>mbrId: {it.mbrId}</li>
                                {it.cartShareItemList.map(it => {
                                    return (
                                        <li>
                                            cartShareItemId: {it.cartShareItemId}, itemId: {it.itemId}, itemQty:{' '}
                                            {it.itemQty}
                                        </li>
                                    );
                                })}
                                <br />
                            </div>
                        );
                    })}
                </div>
            </CartShareDetailWrapper>
        </CartShareDetailContainer>
    );
};

const CartShareDetailContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    font-family: 'line';
`;

const CartShareDetailWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

const CartShareDetailTitle = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
`;

export default CartShareDetail;
