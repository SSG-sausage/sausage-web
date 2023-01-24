/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayNavigationBar from './DutchPayNavigationBar';
import DutchPayCreateOptSec from '../../components/dutchpay/DutchPayCreateOptSec';
import DutchPayCreateOptSpl from './DutchPayCreateOptSpl';
import DutchPayCreateOptInp from './DutchPayCreateOptInp';

const DutchPayCreate = ({
    onClickOptBtn,
    onClickBack,
    opt,
    calcResponse,
    dutchPay,
    splInput,
    onChangeSplInput,
    inpInput,
    onChangeInpInput,
    onChangeInpRmd,
    onClickSave,
}) => {
    return (
        <>
            <DutchPayCreateHeader>
                <div onClick={onClickBack}>
                    <img className="arrow-back" src={require('../../assets/arrow-back.png')} />
                </div>
                <div className="title">정산 내역 생성</div>
                <div className="save-btn" onClick={onClickSave}>
                    저장
                </div>
            </DutchPayCreateHeader>
            <DutchPayWrapper>
                <DutchPayOptSelect>
                    <div className="title">정산 옵션</div>
                    <div className="opt-container">
                        <div
                            className={`opt-btn ${opt === 'SECTION' ? 'selected' : ''}`}
                            id="SECTION"
                            onClick={onClickOptBtn}
                        >
                            섹션별 계산
                        </div>
                        <div
                            className={`opt-btn ${opt === 'SPLIT' ? 'selected' : ''}`}
                            id="SPLIT"
                            onClick={onClickOptBtn}
                        >
                            1/N 계산
                        </div>
                        <div
                            className={`opt-btn ${opt === 'INPUT' ? 'selected' : ''}`}
                            id="INPUT"
                            onClick={onClickOptBtn}
                        >
                            직접 입력
                        </div>
                    </div>
                </DutchPayOptSelect>
                <DutchPayInput>
                    {opt === 'SECTION' && <DutchPayCreateOptSec dutchPay={dutchPay} calcResponse={calcResponse} />}
                    {opt === 'SPLIT' && (
                        <DutchPayCreateOptSpl
                            dutchPay={dutchPay}
                            splInput={splInput}
                            onChangeSplInput={onChangeSplInput}
                        />
                    )}
                    {opt === 'INPUT' && (
                        <DutchPayCreateOptInp
                            dutchPay={dutchPay}
                            inpInput={inpInput}
                            onChangeInpInput={onChangeInpInput}
                            onChangeInpRmd={onChangeInpRmd}
                        />
                    )}
                </DutchPayInput>
            </DutchPayWrapper>
        </>
    );
};

const DutchPayCreateHeader = styled.div`
    width: 390px;
    height: 29px;
    display: flex;
    line-height: 29px;

    justify-content: space-between;
    .save-btn {
        margin-right: 30px;
        font-weight: 400;
        font-size: 16px;
        color: #3a94fa;
        cursor: pointer;
    }
    .title {
        font-weight: 700;
        font-size: 20px;
    }
    .arrow-back {
        margin-left: 30px;
        cursor: pointer;
    }
`;
const DutchPayOptSelect = styled.div`
    .title {
        margin-top: 28px;
        text-align: center;
        margin-bottom: 29px;
    }
    .opt-container {
        margin-left: 54px;
        width: 281px;
        display: flex;
        justify-content: space-between;
    }
    .opt-btn {
        height: 27px;
        line-height: 31px;
        border-radius: 8px;
        width: fit-content;
        padding: 0px 8px;
        color: #3a94fa;
        background: white;
        font-weight: 700;
        font-size: 16px;
        cursor: default;
        border: 1.5px solid #3a94fa;
        cursor: pointer;
    }

    .selected {
        background: #3a94fa;
        color: white;
    }
`;

const DutchPayWrapper = styled.div``;
const DutchPayInput = styled.div`
    border: 2px solid #f5f5f5;
    width: 356px;
    max-height: 590px;
    margin: auto;
    margin-top: 22px;
    overflow: auto;
`;

export default DutchPayCreate;
