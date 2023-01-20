/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayNavigationBar from './DutchPayNavigationBar';

const DutchPayDetail = () => {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <DutchPayNavigationBar />
            <DutchPayWrapper>
                <div className="header">
                    <div className="opt">섹션별 계산</div>
                    <div className="opt-desc">적용 중</div>
                </div>
                <div className="content">
                    <div></div>
                    <div></div>
                </div>
                <div className="footer">
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
            </DutchPayWrapper>
        </>
    );
};

const DutchPayWrapper = styled.div`
    position: relative;
    height: 698px;

    .header {
        display: flex;
        padding-left: 10px;
        padding-top: 23px;
    }
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
    .content {
        width: 356px;
        height: 436px;
        border: 2px solid #f5f5f5;
        margin: auto;
        margin-top: 9px;
    }

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

export default DutchPayDetail;
