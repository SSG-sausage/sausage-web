/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayNavigationBar from './DutchPayNavigationBar';

const DutchPay = ({ onClickCreate, cartShareOrdId }) => {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <DutchPayNavigationBar />
            <DutchPayWrapper>
                <CreateDutchPayBtn onClick={() => onClickCreate(cartShareOrdId)}>
                    함께쓱정산 <br />
                    시작하기
                </CreateDutchPayBtn>
            </DutchPayWrapper>
        </>
    );
};

const DutchPayWrapper = styled.div`
    position: relative;
`;

const CreateDutchPayBtn = styled.div`
    width: 227px;
    height: 227px;
    display: flex;
    justify-content: center;
    align-item: center;
    background: #3a94fa;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #ffffff;
    position: absolute;
    width: 227px;
    height: 227px;
    left: 82px;
    top: 197px;
    box-sizing: border-box;
    padding-top: 75px;
    cursor: pointer;
`;

export default DutchPay;
