/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const Master = ({ calcResponse }) => {
    return (
        <MasterContainer>
            <img id="arrow-back" src={require('../../assets/master.png')} />
        </MasterContainer>
    );
};

const MasterContainer = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 2px;
`;
export default Master;
