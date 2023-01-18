/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const CartShareDetail = ({ cartShareData }) => {
    return (
        <>
            <NavigationBar />
            <BackGround />
            <CartShareInfo>
                <div id="cartShareNm">소시지</div>
                <div id="memberInfo">
                    <span>멤버 1명</span>
                </div>
                <div id="line"></div>
                <div id="shppAddress">[전미림] 서울특별시 강서구 공항대로 543</div>
                <div id="menu">
                    <div id="invite">친구초대</div>
                    <div id="line1"></div>
                    <div id="order">주문내역</div>
                    <div id="line2"></div>
                    <div id="setting">관리</div>
                </div>
            </CartShareInfo>
            <OptionContainer></OptionContainer>
        </>
    );
};

const OptionContainer = styled.div`
    width: ;
    background-color: red;
`;

const BackGround = styled.div`
    float: left;
    height: 76px;
    width: 390px;
    top: 47px;
    background-color: #6c78f0;
`;

const CartShareInfo = styled.div`
    position: relative;
    height: 216px;
    width: 334px;
    left: 28px;
    top: 71px;
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
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.5px;
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
        width: 275px;
        height: 38px;
        border: 1px solid #888888;
        border-radius: 20px;
        left: 29.5px;
        top: 163px;
        text-align: center;
    }

    #invite {
        padding-top: 11px;
        float: left;
        width: 95.5px;
        height: 20px;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #order {
        padding-top: 11px;
        width: 80px;
        height: 20px;
        float: left;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.5px;
        color: #888888;
    }

    #setting {
        padding-top: 11px;
        float: left;
        width: 95.5px;
        height: 20px;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.5px;
        color: #888888;
    }

    #line1 {
        float: left;
        width: 0px;
        height: 22px;
        margin-top: 8px;
        border: 1px solid #888888;
    }

    #line2 {
        float: left;
        width: 0px;
        height: 22px;
        left: 209px;
        margin-top: 8px;
        border: 1px solid #888888;
    }
`;

export default CartShareDetail;
