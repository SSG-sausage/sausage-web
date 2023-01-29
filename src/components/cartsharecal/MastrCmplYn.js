/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const MastrCmplYn = ({ cmplYn, cartShareCalId, mbrId, onClickCmplYn }) => {
    return (
        <CmplYnContainer onClick={() => onClickCmplYn(mbrId, cartShareCalId)}>
            {!cmplYn && <div className="cmpl-n">정산 완료</div>}
            {cmplYn && <div className="cmpl-y">정산 완료</div>}
        </CmplYnContainer>
    );
};

const CmplYnContainer = styled.div`
    .cmpl-y {
        color: white;
        background: #3a94fa;
        width: 50px;
        height: 22px;
        font-weight: 400;
        font-size: 10px;
        border-radius: 20px;
        text-align: center;
        line-height: 22px;
        margin-left: 10px;
        cursor: pointer;
    }
    .cmpl-n {
        color: #3a94fa;
        background: white;
        width: 50px;
        height: 20px;
        font-weight: 400;
        font-size: 10px;
        border-radius: 20px;
        border: 1px solid #3a94fa;
        text-align: center;
        line-height: 22px;
        margin-left: 10px;
        cursor: pointer;
    }
`;

export default MastrCmplYn;
