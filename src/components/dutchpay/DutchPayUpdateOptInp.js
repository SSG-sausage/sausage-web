/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayNavigationBar from './DutchPayNavigationBar';
import Master from './Master';
import Me from './Me';

const DutchPayUpdateOptInp = ({ dutchPay, inpInput, onChangeInpInput, onChangeInpRmd }) => {
    return (
        <OptSecContainer>
            {dutchPay.dutchPayDtlList?.map((info, index) => (
                <DutchPayDtl key={info.mbrId}>
                    <div className="name-container">
                        {info.mastrYn && <Me />}
                        <div className="name">
                            {info.mbrNm}
                            {info.mastrYn && <Master />}
                        </div>
                    </div>
                    <div className="dt-container">
                        <div className="main-dt-container">
                            <input
                                className="dt-value"
                                onChange={e => onChangeInpInput(e, info.mbrId)}
                                value={Number(inpInput.dtlMap.get(info.mbrId)).toString()}
                                type="number"
                            />
                            <div className="dt-unit">원</div>
                        </div>
                    </div>
                </DutchPayDtl>
            ))}
            <div className="rmd">
                <div className="rmd-label">나머지</div>
                <div className="rmd-value">
                    <input
                        className="rmd-amt"
                        onChange={onChangeInpRmd}
                        value={Number(inpInput.dtRmd).toString()}
                        type="number"
                    />
                    <div className="rmd-unit">원</div>
                </div>
            </div>
            <div className="border"></div>
            <div className="sum-container">
                <div className="sum-label">총 정산 금액</div>
                <div className="sum-value">
                    <div className="sum-amt">{inpInput.dtAmt}</div>
                    <div className="sum-unit">원</div>
                </div>
            </div>
            <div className="paymt-container">
                <div className="paymt-label">결제 금액</div>
                <div className="paymt-value">
                    <div className="paymt-amt">{dutchPay.paymtAmt}</div>
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
        width: 15px;
        text-align: right;
        border: none;
        border-bottom: 1px solid black;
        padding-right: 4px;
        font-size: 16px;
        height: 15px;
        line-height: 15px;
        font-family: 'line';
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
        padding-right: 4px;
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
const DutchPayDtl = styled.div`
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
        border: none;
        border-bottom: 1px solid black;
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

export default DutchPayUpdateOptInp;
