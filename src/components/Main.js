/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const Main = () => {
    return (
        <MainContainer>
            <MainWrapper>
                <MainTitle>
                    <h2>메인</h2>
                </MainTitle>
            </MainWrapper>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    font-family: 'line';
`;

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

const MainTitle = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
`;

export default Main;
