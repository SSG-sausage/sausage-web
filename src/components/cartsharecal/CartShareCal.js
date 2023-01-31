/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import CalDetailOptInp from './detail/CalDetailOptInp';
import CalDetailOptSec from './detail/CalDetailOptSec';
import CalDetailOptSpl from './detail/CalDetailOptSpl';
import CartShareCalNavigationBar from './CartShareCalNavigationBar';
import OrdBottomSheet from './OrdBottomSheet';

const CartShareCal = ({
    onClickCreate,
    cartShareCal,
    onClickCmplYn,
    onClickUpdate,
    openOrdSheet,
    onClickOpenSheet,
    onClickCloseSheet,
    onClickNoti,
    notiSuccess,
}) => {
    return (
        <>
            <CartShareCalNavigationBar />
            <CalWrapper>
                {cartShareCal.calStYn === false && cartShareCal.mastrYn && (
                    <EmptyCartShareCal>
                        정산 내역이 생성되지 않았습니다.
                        <CreateCartShareCalBtn onClick={() => onClickCreate()}>쓱총무 도움받기</CreateCartShareCalBtn>
                    </EmptyCartShareCal>
                )}
                {cartShareCal.calStYn === false && !cartShareCal.mastrYn && (
                    <EmptyCartShareCal>정산 내역이 생성되지 않았습니다.</EmptyCartShareCal>
                )}
                {cartShareCal.calStYn && (
                    <CartShareCalDetail>
                        <Detail>
                            <div className="detail-header-title">정산 내역</div>
                            <div className="detail-header-opt">
                                {cartShareCal.calOptCd === 'SECTION' && <div className="opt">섹션별 계산</div>}
                                {cartShareCal.calOptCd === 'SPLIT' && <div className="opt">1/N 계산</div>}
                                {cartShareCal.calOptCd === 'INPUT' && <div className="opt">직접 입력</div>}

                                <div className="opt-desc">적용 중</div>
                            </div>
                            <DetailContent>
                                {cartShareCal.calOptCd === 'SECTION' && (
                                    <CalDetailOptSec cartShareCal={cartShareCal} onClickCmplYn={onClickCmplYn} />
                                )}
                                {cartShareCal.calOptCd === 'SPLIT' && (
                                    <CalDetailOptSpl cartShareCal={cartShareCal} onClickCmplYn={onClickCmplYn} />
                                )}
                                {cartShareCal.calOptCd === 'INPUT' && (
                                    <CalDetailOptInp cartShareCal={cartShareCal} onClickCmplYn={onClickCmplYn} />
                                )}
                            </DetailContent>
                            <div className="openSheet" onClick={() => onClickOpenSheet()}>
                                주문 상품 자세히 보기 >
                            </div>
                        </Detail>
                        <DetailFooter>
                            {cartShareCal.mastrYn && (
                                <div className="share-container">
                                    {notiSuccess && <div class="share-noti">멤버들에게 알림이 발송되었습니다.</div>}
                                    <div class="share-btn-container">
                                        <div className="noti-btn" onClick={() => onClickNoti()}>
                                            정산 알림 보내기
                                        </div>
                                        <div className="share-btn">
                                            <div className="share-icon-container">
                                                <img className="share-icon" src={require('../../assets/share.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DetailFooter>
                        {cartShareCal.mastrYn && (
                            <div className="edit-btn" onClick={() => onClickUpdate()}>
                                금액
                                <br />
                                수정
                            </div>
                        )}
                    </CartShareCalDetail>
                )}
                {openOrdSheet && (
                    <OrdBottomSheet
                        cartShareOrdId={cartShareCal.cartShareOrdId}
                        onClickCloseSheet={onClickCloseSheet}
                    />
                )}
            </CalWrapper>
        </>
    );
};

const CalWrapper = styled.div`
    position: relative;
    height: 750px;
`;

const CreateCartShareCalBtn = styled.div`
    width: 390px;
    height: 57px;
    line-height: 57px;
    background: #3a94fa;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    border-radius: 0 0 20px 20px;
`;

const EmptyCartShareCal = styled.div`
    width: 390px;
    height: 750px;
    text-align: center;
    color: #888888;
    font-weight: 400;
    font-size: 20px;
    line-height: 600px;
`;

const CartShareCalDetail = styled.div`
    height: 750px;
    position: relative;
    .edit-btn {
        cursor: pointer;
        border-radius: 50%;
        width: 73px;
        height: 73px;
        text-align: center;
        border: none;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        font-weight: 700;
        font-size: 16px;
        background: #d9d9d9;
        position: absolute;
        bottom: 100px;
        right: 20px;
        padding-top: 20px;
        box-sizing: border-box;
    }
`;

const Detail = styled.div`
    height: 650px;
    padding-top: 23px;
    position: relative;
    .detail-header-title {
        margin-top: 10px;
        color: #3a94fa;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        margin-bottom: 5px;
    }

    .detail-header-opt {
        display: flex;
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
        margin-left: 10px;
    }
    .opt-desc {
        padding-top: 9px;
        padding-left: 5px;
        font-weight: 400;
        font-size: 14px;
        color: #888888;
        cursor: default;
    }
    .openSheet {
        margin-top: 40px;
        color: #888888;
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 30px;
        z-index: 1;
    }
`;

const DetailContent = styled.div`
    width: 356px;
    max-height: 500px;
    border: 2px solid #f5f5f5;
    margin: auto;
    margin-top: 9px;
    overflow: auto;
`;

const DetailFooter = styled.div`
    .share-icon {
        width: 24px;
    }
    .share-container {
        margin-top: 43px;
        background: white;
        border-radius: 0 0 20px 20px;
        position: absolute;
        bottom: 0px;
    }
    .share-noti {
        background: rgba(0, 0, 0, 0.5);
        width: 358px;
        height: 48px;
        border-radius: 10px;
        color: white;
        margin: auto;
        text-align: center;
        line-height: 48px;
        margin-bottom: 15px;
        font-size: 12px;
    }
    .share-btn-container {
        height: 58px;
        display: flex;
    }
    .noti-btn {
        cursor: pointer;
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
        width: 65px;
        border: 2px solid #3a94fa;
        border-radius: 0 0 20px;
    }
`;

export default CartShareCal;
