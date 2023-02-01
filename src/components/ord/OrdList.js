import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OrdContainer from '../../containers/ord/OrdContainer';
import SearchBox from '../item/SearchBox';

const OrdList = ({ ordList, onClickCal }) => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    };

    return (
        <>
            <SearchBox />
            <Container>
                <TopNav>
                    <div>
                        <img className="arrow-back" src={require('../../assets/arrow-back.png')} onClick={backClick} />
                    </div>
                    <div>주문내역</div>
                    <div></div>
                </TopNav>
                <Space />

                {ordList.length === 0 ? (
                    <>
                        <EmptyOrd>최근 3개월간 주문 내역이 없습니다.</EmptyOrd>
                    </>
                ) : (
                    <>
                        {ordList.map((it, index) => (
                            <OrdContainer
                                key={it.cartShareOrdId}
                                cartShareOrdId={it.cartShareOrdId}
                                cartShareCalId={it.cartShareCalId}
                                ttlPaymtAtm={it.ttlPaymtAmt.toLocaleString() + '원'}
                                regDts={it.cartShareOrdRcpDts.split('T')[0]}
                                onClickCal={onClickCal}
                            />
                        ))}
                    </>
                )}
            </Container>
        </>
    );
};

export default OrdList;

const Container = styled.div`
    justify-self: center;
    height: 792px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: #f9f9f9;
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
            cursor: pointer;
        }
    }

    > div:nth-child(3) {
        width: 30px;
        height: 30px;
        background-color: white;
        padding-right: 10px;
    }
`;

const Space = styled.div`
    width: 100%;
    height: 30px;
`;

const EmptyOrd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 650px;
    background-color: white;
    font-size: 20px;
    color: #888888;
`;
