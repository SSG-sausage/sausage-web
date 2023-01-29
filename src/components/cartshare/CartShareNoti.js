import styled from 'styled-components';

const CartShareNoti = ({ cartShareNotiList, onClickBack }) => {
    const formatDate = date => {
        return date.slice(0, 10).replaceAll('-', '.');
    };
    return (
        <NotiContainer>
            <NotiHeader>
                <img className="arrow-back" onClick={onClickBack} src={require('../../assets/arrow-back.png')} />
                <div className="title">알림함</div>
                <img className="home" src={require('../../assets/home.png')} />
            </NotiHeader>
            <NotiContent>
                {cartShareNotiList.cartShareNotiList?.map((noti, index) => (
                    <div key={noti.cartShareNotiId} className="noti">
                        <div class="noti-header">
                            {noti.notiCd === 'CART_SHARE' && (
                                <div className="noti-tag noti-tag-cart-share">함께 장보기</div>
                            )}
                            {noti.notiCd === 'CART_SHARE_ORD' && (
                                <div className="noti-tag noti-tag-cart-share-ord">주문 안내</div>
                            )}
                            {noti.notiCd === 'CART_SHARE_CAL' && (
                                <div className="noti-tag noti-tag-cart-share-cal">쓱총무</div>
                            )}
                            <div className="noti-date">{formatDate(noti.regDts)}</div>
                        </div>
                        <div className="noti-content">{noti.cartShareNotiCntt}</div>
                    </div>
                ))}
            </NotiContent>
        </NotiContainer>
    );
};

const NotiContainer = styled.div`
    background: #f5f5f5;
    border-radius: 20px;
`;

const NotiHeader = styled.div`
    background: white;
    width: 390px;
    height: 47px;
    align-items: center;
    display: flex;
    line-height: 29px;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    justify-content: space-between;
    .home {
        margin-right: 10px;
        font-weight: 400;
        font-size: 16px;
        color: #3a94fa;
        cursor: pointer;
    }
    .title {
        font-weight: 400;
        font-size: 14px;
    }
    .arrow-back {
        margin-left: 10px;
        cursor: pointer;
    }
`;

const NotiContent = styled.div`
    border-radius: 0 0 20px 20px;
    height: 750px;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 18px;
    .noti {
        background: white;
        width: 390px;
        hegiht: 50px;
        padding: 10px 0px;
        margin: 12px 0px;
    }
    .noti-header {
        display: flex;
        justify-content: space-between;
    }
    .noti-date {
        font-weight: 400;
        font-size: 12px;
        color: #888888;
        margin-right: 17px;
        padding-top: 8px;
    }
    .noti-tag {
        width: 92px;
        height: 22px;
        border-radius: 20px;
        text-align: center;
        line-height: 23px;
        margin-left: 11px;
        font-weight: 400;
        font-size: 12px;
    }
    .noti-content {
        white-space: pre-wrap;
        font-weight: 400;
        font-size: 12px;
        margin: 8px 23px;
    }
    .noti-tag-cart-share {
        border: 1px solid #6c78f0;
        color: #6c78f0;
    }
    .noti-tag-cart-share-ord {
        border: 1px solid #e9a956;
        color: #e9a956;
    }
    .noti-tag-cart-share-cal {
        border: 1px solid #3a94fa;
        color: #3a94fa;
    }
`;

export default CartShareNoti;
