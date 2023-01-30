import styled from 'styled-components';

const OrdModal = ({ cartShareChoosingMbrCnt, changeOrdModalOn }) => {
    return cartShareChoosingMbrCnt > 0 ? (
        <Container>
            <Modal>
                <div>
                    함께 장보기 참여 멤버가<br></br>아직 담기를 완료하지 않았습니다.<br></br>그래도 주문하시겠습니까?
                </div>

                <div>모든 멤버가 장보기를 완료했는지 확인해 주세요.</div>
                <Buttons>
                    <CancleBnt onClick={changeOrdModalOn}>취소</CancleBnt>
                    <OrdBnt>주문하기</OrdBnt>
                </Buttons>
            </Modal>
        </Container>
    ) : (
        <Container>
            <Modal>
                <div>
                    주문 단계로 넘어가면 상품 추가/삭제가<br></br>불가능합니다. 주문하시겠습니까?
                </div>

                <div>장바구니로 돌아가면 상품을 더 담을 수 있어요.</div>
                <Buttons>
                    <CancleBnt onClick={changeOrdModalOn}>취소</CancleBnt>
                    <OrdBnt>주문하기</OrdBnt>
                </Buttons>
            </Modal>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 989;
    background-color: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
    width: 300px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    > div:nth-child(1) {
        width: 100%;
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
    }

    > div:nth-child(2) {
        width: 100%;
        font-size: 12px;
        color: #888888;
        text-align: center;
        margin-top: 20px;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: none;
    margin-top: 23px;
    border-top: solid 1px #f2f2f2;
`;

const CancleBnt = styled.button`
    width: 50%;
    background-color: white;
    padding: 13px;
    border: none;
    cursor: pointer;
    color: black;

    border-bottom-left-radius: 10px;
    border-right: solid 1px #f2f2f2;
`;

const OrdBnt = styled.button`
    width: 50%;
    background-color: white;
    padding: 13px;
    border: none;
    cursor: pointer;
    color: black;

    border-bottom-right-radius: 10px;
`;

export default OrdModal;
