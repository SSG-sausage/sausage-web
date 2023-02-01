import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createOrd } from '../../api/ord/ord';

const OrdPaymt = ({ cartShareId, tmpOrdTtlPaymtAmt }) => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    };

    const onClickModalOrdBnt = () => {
        createOrd(cartShareId).then(response => {
            navigate(`/order-success`, {
                state: {
                    cartShareCalId: response.data.data.cartShareCalId,
                    cartShareOrdId: response.data.data.cartShareOrdId,
                    ttlPaymtAmt: response.data.data.ttlPaymtAmt,
                },
            });
        });
    };
    console.log(cartShareId);
    console.log(tmpOrdTtlPaymtAmt);

    return (
        <Container>
            <TopNav>
                <div>
                    <img className="arrow-back" src={require('../../assets/arrow-back.png')} onClick={backClick} />
                </div>
                <div>결제하기</div>
                <div></div>
            </TopNav>

            <BtnContainer>
                <PaymtBnt onClick={onClickModalOrdBnt}>{tmpOrdTtlPaymtAmt.toLocaleString()}원 결제하기</PaymtBnt>
            </BtnContainer>
        </Container>
    );
};

export default OrdPaymt;

const Container = styled.div`
    justify-self: center;
    height: 792px;
    border-radius: 20px;
    background-color: white;
    overflow: auto;
`;

const TopNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: solid 2px #f2f2f2;

    > div:nth-child(1) {
        > img {
            margin-left: 10px;
        }
    }

    > div:nth-child(3) {
        width: 30px;
        height: 30px;
        background-color: white;
        padding-right: 10px;
    }
`;

const PaymtBnt = styled.button`
    width: 250px;
    height: 205px;
    font-size: 20px;
    background: #eb4f47;
    color: white;
    text-align: center;
    border: none;
    margin-top: 20px;

    cursor: pointer;
`;

const BtnContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;

    cursor: pointer;
`;
