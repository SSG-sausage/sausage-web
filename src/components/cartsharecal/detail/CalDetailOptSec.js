/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import Master from '../Master';
import Me from '../Me';
import MastrCmplYn from '../MastrCmplYn';
import MbrCmplYn from '../MbrCmplYn';

const CalDetailOptSec = ({ cartShareCal, onClickCmplYn }) => {
    return (
        <OptSecContainer>
            {cartShareCal.cartShareCalDtlList?.map((info, index) => (
                <CalDtl key={info.mbrId}>
                    <div className="name-container">
                        {info.meYn && <Me />}
                        <div className="name">
                            {info.mbrNm}
                            {info.mastrYn && <Master />}
                            {cartShareCal.mastrYn && !info.mastrYn && (
                                <MastrCmplYn
                                    cmplYn={info.calCmplYn}
                                    mbrId={info.mbrId}
                                    cartShareCalId={cartShareCal.cartShareCalId}
                                    onClickCmplYn={onClickCmplYn}
                                />
                            )}
                            {!cartShareCal.mastrYn && !info.mastrYn && <MbrCmplYn cmplYn={info.calCmplYn} />}
                        </div>
                    </div>
                    <div className="dt-container">
                        <div className="main-dt-container">
                            <div className="dt-value">{info.calDtlAmt.toLocaleString()}</div>
                            <div className="dt-unit">원</div>
                        </div>
                        <div className="dtl-dt-container">
                            <div className="dtl-dt-label">공동</div>
                            <div className="dtl-dt-amt">{info.commAmt.toLocaleString()}</div>
                            <div className="dtl-dt-unit">원</div>
                        </div>
                        <div className="dtl-dt-container">
                            <div className="dtl-dt-label">개별</div>
                            <div className="dtl-dt-amt">{info.perAmt.toLocaleString()}</div>
                            <div className="dtl-dt-unit">원</div>
                        </div>
                        <div className="dtl-dt-container">
                            <div className="dtl-dt-ship-label">배송비</div>
                            <div className="dtl-dt-amt">{info.shppCst.toLocaleString()}</div>
                            <div className="dtl-dt-unit">원</div>
                        </div>
                    </div>
                </CalDtl>
            ))}
            <div className="rmd">
                <div className="rmd-label">나머지</div>
                <div className="rmd-value">
                    <div className="rmd-amt">{cartShareCal.calRmd.toLocaleString()}</div>
                    <div className="rmd-unit">원</div>
                </div>
            </div>
            <div className="border"></div>
            <div className="sum-container">
                <div className="sum-label">총 정산 금액</div>
                <div className="sum-value">
                    <div className="sum-amt">{cartShareCal.calAmt.toLocaleString()}</div>
                    <div className="sum-unit">원</div>
                </div>
            </div>
            <div className="paymt-container">
                <div className="paymt-label">결제 금액</div>
                <div className="paymt-value">
                    <div className="paymt-amt">{cartShareCal.ttlPaymtAmt.toLocaleString()}</div>
                    <div className="paymt-unit">원</div>
                </div>
            </div>
        </OptSecContainer>
    );
};

const OptSecContainer = styled.div`
    .rmd {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 16px;
        height: 15px;
        line-height: 15px;
    }
    .rmd-label {
        padding-left: 46px;
    }

    .rmd-value {
        display: flex;
        margin-right: 15px;
    }

    .rmd-amt {
        margin-right: 3px;
    }
    .border {
        margin: auto;
        margin-top: 24px;
        border-bottom: 1px solid #888888;
        width: 327px;
    }
    .sum-container {
        display: flex;
        margin-top: 26px;
        justify-content: space-between;
        height: 24px;
        line-height: 24px;
    }
    .sum-label {
        font-weight: 700;
        font-size: 16px;
        margin-left: 43px;
    }
    .sum-value {
        display: flex;
        font-weight: 700;
        font-size: 20px;
    }
    .sum-amt {
        font-weight: 700;
        font-size: 24px;
        padding-right: 4px;
    }
    .sum-unit {
        margin-right: 20px;
        margin-left: 10px;
    }
    .paymt-container {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        font-weight: 400;
        font-size: 14px;
        color: #626262;
        margin-bottom: 30px;
    }
    .paymt-label {
        margin-left: 68px;
    }
    .paymt-value {
        display: flex;
        font-size: 16px;
    }
    .paymt-amt {
        padding-right: 4px;
    }
    .paymt-unit {
        margin-right: 20px;
        margin-left: 13px;
    }
`;
const CalDtl = styled.div`
    margin-top: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;

    .name-container {
        display: flex;
        position: relative;
    }
    .name {
        font-weight: 700;
        font-size: 20px;
        position: absolute;
        left: 33px;
        display: flex;
    }
    .dt-container {
        position: relative;
    }
    .dt-value {
        height: 26px;
        line-height: 25px;
        padding-right: 4px;
    }
    .main-dt-container {
        display: flex;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 8px;
    }
    .dt-unit {
        margin-right: 14px;
        margin-left: 10px;
    }

    .dtl-dt-container {
        display: flex;
        font-weight: 400;
        font-size: 12px;
        color: #888888;
        height: 20px;
    }
    .dtl-dt-label {
        position: absolute;
        left: -15px;
    }
    .dtl-dt-ship-label {
        position: absolute;
        left: -25px;
    }
    .dtl-dt-amt {
        position: absolute;
        right: 26px;
    }
    .dtl-dt-unit {
        position: absolute;
        right: 14px;
    }
`;

export default CalDetailOptSec;
