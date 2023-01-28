/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import Master from './Master';
import Me from './Me';
const NameInfoCreate = ({ info }) => {
    return (
        <NameInfoContainer>
            {info.mastrYn && <Me />}
            <NameValue>
                {info.mbrNm}
                {info.mastrYn && <Master />}
            </NameValue>
        </NameInfoContainer>
    );
};

const NameInfoContainer = styled.div`
    display: flex;
    position: relative;
    height: 25px;
    line-height: 25px;
`;

const NameValue = styled.div`
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    left: 33px;
    display: flex;
`;
export default NameInfoCreate;
