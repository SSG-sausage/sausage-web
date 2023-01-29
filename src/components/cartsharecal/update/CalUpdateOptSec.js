/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NameInfoUpdate from './NameInfoUpdate';

const CalUpdateOptSec = ({ cartShareCal, calcResponse }) => {
    return (
        <OptSecContainer>
            {calcResponse.cartShareCalDtlList?.map((info, index) => (
                <CalDtl key={info.mbrId}>
                    <CalDtlInfo>
                        <NameInfoUpdate info={info} />
                        <div>
                            <div className="main-cal">
                                <div className="main-cal-amt">{info.calDtlAmt.toLocaleString()}</div>
                                <div className="main-cal-unit">원</div>
                            </div>
                        </div>
                    </CalDtlInfo>
                    <div className="sub-cal-box">
                        <div className="sub-cal">
                            <div className="sub-cal-label">공동</div>
                            <div className="sub-cal-amt">{info.commAmt.toLocaleString()}</div>
                            <div className="sub-cal-unit">원</div>
                        </div>
                        <div className="sub-cal">
                            <div className="sub-cal-label">개별</div>
                            <div className="sub-cal-amt">{info.perAmt.toLocaleString()}</div>
                            <div className="sub-cal-unit">원</div>
                        </div>
                        <div className="sub-cal">
                            <div className="sub-cal-label sub-cal-last-label">배송비</div>
                            <div className="sub-cal-amt">{info.shppCst.toLocaleString()}</div>
                            <div className="sub-cal-unit">원</div>
                        </div>
                    </div>
                </CalDtl>
            ))}
            <div className="rmd">
                <div className="rmd-label">나머지</div>
                <div className="rmd-value">
                    <div className="rmd-amt">{calcResponse.calRmd.toLocaleString()}</div>
                    <div className="rmd-unit">원</div>
                </div>
            </div>
            <div className="border"></div>
            <div className="sum">
                <div className="sum-label">총 정산 금액</div>
                <div className="sum-value">
                    <div className="sum-amt">{calcResponse.calAmt.toLocaleString()}</div>
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
        margin-right: 3px;
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
    .sum-amt {
        font-weight: 700;
        font-size: 24px;
        padding-right: 4px;
    }
    .sum-unit {
        margin-right: 20px;
        margin-left: 10px;
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
    .sub-cal-box {
        margin-bottom: 20px;
    }
    .sub-cal {
        display: flex;
        font-weight: 400;
        font-size: 12px;
        color: #888888;
        height: 20px;
        line-height: 20px;
        justify-content: right;
    }
    .sub-cal-label {
        width: 30px;
        text-align: right;
    }

    .sub-cal-amt {
        width: 60px;
        text-align: right;
    }
    .sub-cal-unit {
        margin-right: 14px;
        margin-left: 3px;
    }
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
    }

    .main-cal-unit {
        margin-right: 14px;
        margin-left: 10px;
    }
`;

export default CalUpdateOptSec;
