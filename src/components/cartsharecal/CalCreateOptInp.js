/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NameInfoCreate from './NameInfoCreate';

const CalCreateOptInp = ({ cartShareCal, inpInput, onChangeInpInput, onChangeInpRmd }) => {
    return (
        <OptSecContainer>
            {cartShareCal.cartShareCalDtlList?.map((info, index) => (
                <CalDtl key={info.mbrId}>
                    <CalDtlInfo>
                        <NameInfoCreate info={info} />

                        <div className="main-cal">
                            <input
                                className="main-cal-amt"
                                onChange={e => onChangeInpInput(e, info.mbrId)}
                                value={inpInput.dtlMap.get(info.mbrId).toLocaleString()}
                            />
                            <div className="main-cal-unit">원</div>
                        </div>
                    </CalDtlInfo>
                </CalDtl>
            ))}
            <div className="rmd">
                <div className="rmd-label">나머지</div>
                <div className="rmd-value">
                    <input className="rmd-amt" onChange={onChangeInpRmd} value={inpInput.calRmd.toLocaleString()} />
                    <div className="rmd-unit">원</div>
                </div>
            </div>
            <div className="border"></div>
            <div className="sum">
                <div className="sum-label">총 정산 금액</div>
                <div className="sum-value">
                    <div className="sum-amt">{inpInput.calAmt.toLocaleString()}</div>
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
        width: 20px;
        text-align: right;
        border: none;
        border-bottom: 1px solid black;
        font-size: 16px;
        font-family: 'line';
        box-sizing: border-box;
        margin-right: 3px;
    }

    .rmd-amt:focus {
        outline: none;
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
        padding-right: 4px;
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
        margin-left: 14px;
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
`;

const CalDtlInfo = styled.div`
    display: flex;
    justify-content: space-between;
    .main-cal {
        display: flex;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 8px;
        height: 25px;
        line-height: 25px;
    }

    .main-cal-amt {
        border: none;
        border-bottom: 1px solid black;
        font-size: 20px;
        font-weight: 700;
        width: 100px;
        text-align: right;
        font-family: 'line';
        box-sizing: border-box;
    }
    .main-cal-amt:focus {
        outline: none;
    }

    .main-cal-unit {
        margin-right: 14px;
        margin-left: 10px;
    }
`;

export default CalCreateOptInp;
