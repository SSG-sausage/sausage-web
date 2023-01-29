/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import Master from '../Master';
import Me from '../Me';
import MbrCmplYn from '../MbrCmplYn';
import MastrCmplYn from '../MastrCmplYn';

const NameInfoDetail = ({ cartShareCal, info, onClickCmplYn }) => {
    return (
        <NameInfoContainer>
            {info.mastrYn && <Me />}
            <NameValue>
                {info.mbrNm}
                {info.mastrYn && <Master />}
                {cartShareCal.mastrYn && !info.mastrYn && (
                    <MastrCmplYn
                        cmplYn={info.calCmplYn}
                        mbrId={info.mbrId}
                        carShareCalId={cartShareCal.carShareCalId}
                        onClickCmplYn={onClickCmplYn}
                    />
                )}
                {!cartShareCal.mastrYn && !info.mastrYn && <MbrCmplYn cmplYn={info.calCmplYn} />}
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
export default NameInfoDetail;
