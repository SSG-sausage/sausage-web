import styled from 'styled-components';

const AmtInfo = ({ cartShareAmtInfo }) => {
    return cartShareAmtInfo.itemQty > 0 ? (
        <Container>
            {cartShareAmtInfo.ssgOrdAmt > 0 || cartShareAmtInfo.tradersOrdAmt > 0 ? (
                <div class="freeShppInfo">
                    {cartShareAmtInfo.ssgOrdAmt > 0 ? (
                        <>
                            <p>
                                {cartShareAmtInfo.ssgOrdAmt.toLocaleString()} + 배송비{' '}
                                {cartShareAmtInfo.ssgShppAmt.toLocaleString()}원 ={' '}
                                {cartShareAmtInfo.ssgTotalAmt.toLocaleString()}원
                            </p>
                            <p id="ssgShpp">
                                쓱배송 {cartShareAmtInfo.ssgFreeShppRemainAmt.toLocaleString()}원 추가하면 무료배송
                            </p>
                        </>
                    ) : (
                        <></>
                    )}
                    {cartShareAmtInfo.tradersOrdAmt > 0 ? (
                        <>
                            <p>
                                {cartShareAmtInfo.tradersOrdAmt.toLocaleString()} + 배송비{' '}
                                {cartShareAmtInfo.tradersShppAmt.toLocaleString()}원 ={' '}
                                {cartShareAmtInfo.tradersTotalAmt.toLocaleString()}원
                            </p>
                            <p id="tradersShpp">
                                트레이더스 {cartShareAmtInfo.tradersFreeShppRemainAmt.toLocaleString()}원 추가하면
                                무료배송
                            </p>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <></>
            )}
            <div id="title">결제 예정금액</div>
            <div id="ordAmt">
                <p class="description">주문금액</p>
                <p class="price">+{cartShareAmtInfo.ordAmt.toLocaleString()}원</p>
            </div>
            <div id="discountAmt">
                <p class="description">상품할인</p>
                <p class="price">-{cartShareAmtInfo.discountAmt.toLocaleString()}원</p>
            </div>
            <div id="shppAmt">
                <p class="description">배송비</p>
                <p class="price">+{cartShareAmtInfo.shppAmt.toLocaleString()}원</p>
            </div>
            <div id="line"></div>
            <div id="totalAmt">
                <p class="description" id="totalAmtDesc">
                    총 결제예정금액
                </p>
                <p class="price" id="totalAmtPrice">
                    {cartShareAmtInfo.totalAmt.toLocaleString()}원
                </p>
            </div>
        </Container>
    ) : (
        <></>
    );
};

const Container = styled.div`
    width: 390px;
    height: 200px;

    .freeShppInfo {
        padding-top: 20px;
        padding-bottom: 20px;
        width: 390px;
        text-align: center;
        background: #f5f5f5;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.5px;
    }

    #ssgShpp {
        font-weight: 700;
        color: #f7d047;
    }

    #tradersShpp {
        font-weight: 700;
        color: #b3dc49;
    }

    #title {
        height: 27px;
        font-weight: 600;
        font-size: 16px;
        line-height: 17px;
        display: flex;
        align-items: center;
        letter-spacing: 0.5px;
        margin-left: 20px;
        justify-content: left;
        margin-top: 20px;
    }

    #ordAmt {
        width: 390px;
        height: 23px;
        margin-top: 15px;
    }

    #discountAmt {
        width: 390px;
        height: 23px;
    }

    #shppAmt {
        width: 390px;
        height: 23px;
    }

    #totalAmt {
        margin-top: 16px;
        height: 40px;
        color: #eb4f47;

        #totalAmtDesc {
        }

        #totalAmtPrice {
            font-size: 16px;
            font-weight: 700;
        }
    }

    .description {
        position: absolute;
        left: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 0.5px;
        margin-top: 3px;
    }

    .price {
        position: absolute;
        right: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 0.5px;
        margin-top: 3px;
    }

    #line {
        width: 390px;
        height: 0px;
        border: 1px solid #f5f5f5;
        margin-top: 16px;
    }
`;

export default AmtInfo;
