/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NameInfoDetail from './NameInfoDetail';

const CalDetailOptInp = ({ cartShareCal, onClickCmplYn }) => {
    return (
        <OptInpContainer>
            {cartShareCal.cartShareCalDtlList?.map((info, index) => (
                <CalDtl key={info.mbrId}>
                    <NameInfoDetail cartShareCal={cartShareCal} info={info} onClickCmplYn={onClickCmplYn} />
                    <div className="dt-container">
                        <div className="main-dt-container">
                            <div className="dt-value">{info.calDtlAmt.toLocaleString()}</div>
                            <div className="dt-unit">원</div>
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
            <div className="sum">
                <div className="sum-label">총 정산 금액</div>
                <div className="sum-value">
                    <div className="sum-amt">{cartShareCal.calAmt.toLocaleString()}</div>

                    <div className="sum-unit">원</div>
                </div>
            </div>
            <div className="paymt">
                <div className="paymt-label">결제 금액</div>
                <div className="paymt-value">
                    <div className="paymt-amt">{cartShareCal.ttlPaymtAmt.toLocaleString()}</div>
                    <div className="paymt-unit">원</div>
                </div>
            </div>
        </OptInpContainer>
    );
};

const OptInpContainer = styled.div`
    .rmd {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
    }
    .rmd-label {
        padding-left: 46px;
    }

    .rmd-value {
        display: flex;
        margin-right: 15px;
    }

    .rmd-amt {
        padding-right: 3px;
    }

    .border {
        margin: auto;
        margin-top: 24px;
        border-bottom: 1px solid #888888;
        width: 327px;
    }
    .sum {
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
    .sum-unit {
        margin-right: 20px;
        margin-left: 10px;
    }
    .sum-amt {
        font-weight: 700;
        font-size: 24px;
        border: none;
        width: 80px;
        text-align: right;
        height: 24px;
    }

    .paymt {
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        font-weight: 400;
        font-size: 14px;
        color: #626262;
        margin-bottom: 30px;
    }

    .paymt-amt {
        padding-right: 4px;
    }
    .paymt-label {
        margin-left: 68px;
    }
    .paymt-value {
        display: flex;
        font-size: 16px;
    }

    .paymt-unit {
        margin-right: 20px;
        margin-left: 13px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;
const CalDtl = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
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
        font-size: 20px;
        font-weight: 700;
        width: 100px;
        text-align: right;
        height: 25px;
        line-height: 25px;
        padding-right: 4px;
        font-family: 'line';
    }
    .dt-value:focus {
        outline: none;
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
`;

export default CalDetailOptInp;
