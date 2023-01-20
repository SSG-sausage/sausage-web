import styled from 'styled-components';

const DutchPayNavigationBar = () => {
    return (
        <>
            <DutchPayNavigationWrapper>
                <OrdMenu>주문 내역</OrdMenu>
                <DutchPayMenu>정산 내역</DutchPayMenu>
            </DutchPayNavigationWrapper>
        </>
    );
};

const DutchPayNavigationWrapper = styled.div`
    display: flex;
    height: 47px;
    width: 390px;
    text-align: center;
    justify-content: space-around;
    border-bottom: 0.5px #d9d9d9 solid;
`;
const OrdMenu = styled.div`
    line-height: 47px;
    width: 107px;
    font-size: 20px;
    color: #6c78f1;
    font-weight: bold;
    cursor: pointer;
`;

const DutchPayMenu = styled.div`
    border-bottom: 3px black solid;
    line-height: 47px;
    width: 107px;
    font-size: 20px;
    color: #3994fa;
    font-weight: bold;
    cursor: pointer;
`;
export default DutchPayNavigationBar;
