/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const CartShare = ({ cartShareList, onClickCartShare }) => {
    return (
        <CartShareContainer>
            <CartShareWrapper>
                <CartShareTitle>
                    <h2>CartShare</h2>
                </CartShareTitle>
                {cartShareList.map(it => (
                    <li>
                        <button onClick={() => onClickCartShare(it.cartShareId)}>{it.cartShareId}</button>
                        mastrMbrId: {it.mastrMbrId}, cartShareNm: {it.cartShareNm}
                    </li>
                ))}
            </CartShareWrapper>
        </CartShareContainer>
    );
};

const CartShareContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    font-family: 'line';
`;

const CartShareWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

const CartShareTitle = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
`;

export default CartShare;
