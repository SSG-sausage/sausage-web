/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const CartShareDetail = () => {
    return (
        <CartShareDetailContainer>
            <CartShareDetailWrapper>
                <CartShareDetailTitle>
                    <h2>CartShareDetail</h2>
                </CartShareDetailTitle>
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
