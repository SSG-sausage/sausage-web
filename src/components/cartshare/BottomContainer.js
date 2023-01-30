import styled from 'styled-components';

const BottomContainer = ({
    cartShareMbrId,
    mastrYn,
    cartShareItemQty,
    progStatCd,
    editPsblYn,
    onClickDone,
    changeOrdModalOn,
}) => {
    return (
        <>
            <Container>
                <div class="left">대화하기</div>
                {mastrYn ? (
                    <>
                        {cartShareItemQty > 0 ? (
                            <div class="right" onClick={changeOrdModalOn}>
                                주문하기
                            </div>
                        ) : (
                            <div class="right" id="inactive">
                                주문하기
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {editPsblYn ? (
                            <>
                                {progStatCd === 'IN_PROGRESS' ? (
                                    <div class="right" onClick={() => onClickDone(cartShareMbrId, 'DONE')}>
                                        담기 완료!
                                    </div>
                                ) : (
                                    <div
                                        class="right"
                                        id="inactive"
                                        onClick={() => onClickDone(cartShareMbrId, 'IN_PROGRESS')}
                                    >
                                        상품 더 담기
                                    </div>
                                )}
                            </>
                        ) : (
                            <div class="right" id="gray">
                                마스터 결제 진행 중
                            </div>
                        )}
                    </>
                )}
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 390px;
    height: 55px;

    .left {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 125px;
        height: 55px;
        background: #6c78f0;
        font-weight: 400;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: 0.5px;
        color: #ffffff;
        border-radius: 0 0 0 20px;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 265px;
        height: 55px;
        background: #eb4f47;
        font-weight: 400;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: 0.5px;
        color: #ffffff;
        border-radius: 0 0 20px 0;
        cursor: pointer;
    }

    #inactive {
        background: #f5a7a3;
    }

    #gray {
        background: #666666;
    }
`;

export default BottomContainer;
