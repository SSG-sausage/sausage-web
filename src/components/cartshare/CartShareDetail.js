/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import OrdModal from '../ord/OrdModal';
import AmtInfo from './AmtInfo';
import BottomContainer from './BottomContainer';
import CommonSection from './CommonSection';
import NavigationBar from './NavigationBar';
import PersonalSection from './PersonalSection';

const CartShareDetail = ({
    cartShareData,
    onClickDone,
    onClickPlusOrMinus,
    onClickCommOrMy,
    onClickTrash,
    isOrdModalOn,
    changeOrdModalOn,
    onClickCartshareCal,
    onClickOrdList,
}) => {
    return (
        <>
            {isOrdModalOn ? (
                <OrdModal cartShareChoosingMbrCnt={cartShareData.cartShareMbrCnt} changeOrdModalOn={changeOrdModalOn} />
            ) : (
                <></>
            )}
            <NavigationBar nm={cartShareData.cartShareNm} itemQty={cartShareData.cartShareItemQty} />
            <CartShareContainer>
                <BackGround>
                    <div id="blue"></div>
                    <div id="white"></div>
                </BackGround>
                <CartShareInfo>
                    <div id="cartShareNm">{cartShareData.cartShareNm}</div>
                    <div id="memberInfo">
                        <span id="memberCnt">멤버 {cartShareData.cartShareMbrCnt}명</span>
                        {cartShareData.cartShareChoosingMbrCnt > 0 ? (
                            <span id="memberInProgress">
                                {cartShareData.cartShareChoosingMbrCnt}명이 아직 고르고 있어요!
                            </span>
                        ) : (
                            <span id="memberDone">모두 다 담았어요!</span>
                        )}
                    </div>
                    <div id="line"></div>
                    <div id="shppAddress">{cartShareData.cartShareAddr}</div>
                    <div id="menu">
                        <div id="invite">친구초대</div>
                        <div id="line1"></div>
                        <div id="order" onClick={onClickOrdList}>
                            주문내역
                        </div>
                        <div id="line2"></div>
                        <div id="scm" onClick={() => onClickCartshareCal(cartShareData.cartShareId)}>
                            쓱총무
                        </div>
                        <div id="line3"></div>
                        <div id="setting">관리</div>
                    </div>
                </CartShareInfo>
                <OptionContainer>
                    <div class="option" id="ship">
                        배송 유형
                    </div>
                    <div class="option selected" id="member">
                        참여 멤버
                    </div>
                </OptionContainer>
                <CheckBoxContainer>
                    <div class="checkbox" id="allCheck"></div>
                    <div id="all">전체</div>
                </CheckBoxContainer>
                <CommonSection
                    mastrYn={cartShareData.mastrYn}
                    commonItemInfo={cartShareData.commonItemInfo}
                    onClickPlusOrMinus={onClickPlusOrMinus}
                    onClickCommOrMy={onClickCommOrMy}
                    onClickTrash={onClickTrash}
                />
                {cartShareData.personalItemInfo.map(it => {
                    return (
                        <PersonalSection
                            key={it.mbrNm}
                            personalItemInfo={it}
                            onClickPlusOrMinus={onClickPlusOrMinus}
                            onClickCommOrMy={onClickCommOrMy}
                            onClickTrash={onClickTrash}
                        />
                    );
                })}
                <AmtInfo cartShareAmtInfo={cartShareData.cartShareAmtInfo} />
            </CartShareContainer>
            <BottomContainer
                cartShareMbrId={cartShareData.cartShareMbrId}
                mastrYn={cartShareData.mastrYn}
                cartShareItemQty={cartShareData.cartShareItemQty}
                progStatCd={cartShareData.progStatCd}
                editPsblYn={cartShareData.editPsblYn}
                onClickDone={onClickDone}
                changeOrdModalOn={changeOrdModalOn}
            />
        </>
    );
};

const CartShareContainer = styled.div`
    width: 390px;
    height: 690px;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const CheckBoxContainer = styled.div`
    width: 390px;
    height: 50px;

    .checkbox {
        box-sizing: border-box;
        width: 19px;
        height: 19px;
        background: #ffffff;
        border: 1px solid #a2a1b4;
        border-radius: 5px;
    }

    #allCheck {
        float: left;
        margin-left: 18px;
        margin-top: 19px;
    }

    #all {
        float: left;
        margin-left: 10px;
        margin-top: 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        align-items: center;
        letter-spacing: -0.5px;
    }
`;

const OptionContainer = styled.div`
    width: 390px;
    height: 58px;

    .option {
        float: left;
        width: 69px;
        height: 28px;
        margin-top: 27px;
        border-radius: 20px;
        border: 1px solid;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: -0.5px;
    }

    #ship {
        margin-left: 18px;
    }

    #member {
        margin-left: 5px;
    }

    .selected {
        color: #ffffff;
        background: #a2a1b4;
        border: 1px solid black;
    }
`;

const BackGround = styled.div`
    #blue {
        height: 76px;
        width: 390px;
        background-color: #6c78f0;
    }

    #white {
        height: 160px;
        width: 390px;
    }
`;

const CartShareInfo = styled.div`
    position: absolute;
    height: 216px;
    width: 334px;
    left: 28px;
    top: 21px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    #cartShareNm {
        position: absolute;
        width: 300px;
        height: 17px;
        left: 17px;
        top: 24px;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #memberInfo {
        position: absolute;
        width: 264px;
        height: 17px;
        padding: 10px;
        left: 25px;
        top: 58px;
    }

    #memberCnt {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #memberInProgress {
        position: absolute;
        top: 12px;
        right: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
        letter-spacing: -0.5px;
        color: #888888;
    }

    #memberDone {
        position: absolute;
        top: 12px;
        right: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
        letter-spacing: -0.5px;
        color: #6c78f0;
    }

    #line {
        position: absolute;
        width: 300px;
        height: 0px;
        left: 17px;
        top: 112px;
        border: 1px solid #f5f5f5;
    }

    #shppAddress {
        position: absolute;
        width: 295px;
        height: 17px;
        left: 20px;
        top: 129px;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #menu {
        position: absolute;
        width: 314px;
        height: 30px;
        border: 1px solid #888888;
        border-radius: 20px;
        left: 10px;
        top: 163px;
        text-align: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        align-items: center;
        text-align: center;
        letter-spacing: -0.5px;
    }

    #invite {
        float: left;
        width: 77px;
        height: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #order {
        padding-top: 11px;
        float: left;
        width: 77px;
        height: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #scm {
        padding-top: 11px;
        float: left;
        width: 77px;
        height: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #setting {
        padding-top: 11px;
        float: left;
        width: 77px;
        height: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #line1 {
        float: left;
        width: 0px;
        height: 21px;
        margin-top: 4px;
        border: 1px solid #888888;
    }

    #line2 {
        float: left;
        width: 0px;
        height: 21px;
        margin-top: 4px;
        border: 1px solid #888888;
    }

    #line3 {
        float: left;
        width: 0px;
        height: 21px;
        margin-top: 4px;
        border: 1px solid #888888;
    }
`;

export default CartShareDetail;
