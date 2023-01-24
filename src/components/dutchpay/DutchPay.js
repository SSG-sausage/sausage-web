/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayDetailOptInp from './DutchPayDetailOptInp';
import DutchPayDetailOptSec from './DutchPayDetailOptSec';
import DutchPayDetailOptSpl from './DutchPayDetailOptSpl';
import DutchPayNavigationBar from './DutchPayNavigationBar';

const DutchPay = ({ onClickCreate, dutchPay, onClickCmplYn }) => {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <DutchPayNavigationBar />
            <DutchPayWrapper>
                {dutchPay.dutchPayStYn === false && dutchPay.mastrYn && (
                    <CreateDutchPayBtn onClick={() => onClickCreate()}>
                        함께쓱정산 <br />
                        시작하기
                    </CreateDutchPayBtn>
                )}
                {dutchPay.dutchPayStYn === false && !dutchPay.mastrYn && (
                    <EmptyDutchPay>정산 내역이 없습니다.</EmptyDutchPay>
                )}
                {dutchPay.dutchPayStYn && (
                    <DutchPayDetail>
                        <DutchPayDetailHeader>
                            {dutchPay.dutchPayOptCd === 'SECTION' && <div className="opt">섹션별 계산</div>}
                            {dutchPay.dutchPayOptCd === 'SPLIT' && <div className="opt">1/N 계산</div>}
                            {dutchPay.dutchPayOptCd === 'INPUT' && <div className="opt">직접 입력</div>}

                            <div className="opt-desc">적용 중</div>
                        </DutchPayDetailHeader>
                        <DutchPayDetailContent>
                            {dutchPay.dutchPayOptCd === 'SECTION' && (
                                <DutchPayDetailOptSec dutchPay={dutchPay} onClickCmplYn={onClickCmplYn} />
                            )}
                            {dutchPay.dutchPayOptCd === 'SPLIT' && (
                                <DutchPayDetailOptSpl dutchPay={dutchPay} onClickCmplYn={onClickCmplYn} />
                            )}
                            {dutchPay.dutchPayOptCd === 'INPUT' && (
                                <DutchPayDetailOptInp dutchPay={dutchPay} onClickCmplYn={onClickCmplYn} />
                            )}
                        </DutchPayDetailContent>
                        <DutchPayDetailFooter>
                            {dutchPay.mastrYn && (
                                <div>
                                    <button className="edit-btn">
                                        금액
                                        <br />
                                        수정
                                    </button>
                                    <div className="share-container">
                                        <div className="nofi-btn">정산 알림 보내기</div>
                                        <div className="share-btn">
                                            <div className="share-icon-container">
                                                <img className="share-icon" src={require('../../assets/share.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DutchPayDetailFooter>
                    </DutchPayDetail>
                )}
            </DutchPayWrapper>
        </>
    );
};

const DutchPayWrapper = styled.div`
    position: relative;
`;

const CreateDutchPayBtn = styled.div`
    width: 227px;
    height: 227px;
    display: flex;
    justify-content: center;
    align-item: center;
    background: #3a94fa;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #ffffff;
    position: absolute;
    width: 227px;
    height: 227px;
    left: 82px;
    top: 197px;
    box-sizing: border-box;
    padding-top: 75px;
    cursor: pointer;
`;

const EmptyDutchPay = styled.div`
    width: 390px;
    text-align: center;
    color: #888888;
    font-weight: 400;
    font-size: 24px;
    position: absolute;

    top: 257px;
`;

const DutchPayDetail = styled.div`
    position: relative;
    height: 698px;
`;

const DutchPayDetailHeader = styled.div`
    display: flex;
    padding-left: 10px;
    padding-top: 23px;

    .opt {
        height: 27px;
        line-height: 27px;
        border-radius: 8px;
        background: #3a94fa;
        width: fit-content;
        padding: 0px 8px;
        color: white;
        font-weight: 700;
        font-size: 16px;
        cursor: default;
    }
    .opt-desc {
        padding-top: 9px;
        padding-left: 5px;
        font-weight: 400;
        font-size: 14px;
        color: #888888;
        cursor: default;
    }
`;

const DutchPayDetailContent = styled.div`
    width: 356px;
    height: 436px;
    border: 2px solid #f5f5f5;
    margin: auto;
    margin-top: 9px;
    overflow: auto;
`;

const DutchPayDetailFooter = styled.div`
    .edit-btn {
        cursor: pointer;
        margin-top: 28px;
        border-radius: 50%;
        width: 73px;
        height: 73px;
        border: none;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        font-weight: 700;
        font-size: 16px;
        margin-left: 292px;
    }
    .share-icon {
        width: 24px;
    }
    .share-container {
        margin-top: 43px;
        display: flex;
        background: white;
        border-radius: 0 0 20px 20px;
    }
    .nofi-btn {
        cursor: pointer;
        height: 58px;
        width: 321px;
        background: #3a94fa;
        text-align: center;
        font-wieght: 400;
        font-size: 20px;
        line-height: 58px;
        color: #ffffff;
        border-radius: 0 0 0 20px;
    }
    .share-btn {
        cursor: pointer;
        display: flex;
        margin-left: 1px;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 54px;
        border: 2px solid #3a94fa;
        border-radius: 0 0 20px;
    }
`;

export default DutchPay;
