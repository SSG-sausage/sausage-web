import styled from 'styled-components';
import OrdContainer from '../../containers/ord/OrdContainer';
import SearchBox from '../item/SearchBox';

const OrdList = ({ ordList, mbrIdList }) => {
    return (
        <Container>
            <SearchBox />
            <TopNav>주문내역</TopNav>
            <Space />

            {ordList.map((it, index) => (
                <OrdContainer
                    key={it.cartShareOrdId}
                    cartShareOrdId={it.cartShareOrdId}
                    ttlPaymtAtm={it.ttlPaymtAmt.toLocaleString() + '원'}
                    regDts={it.cartShareOrdRcpDts.split('T')[0]}
                />
            ))}
        </Container>
    );
};

export default OrdList;

const Container = styled.div`
    justify-self: center;
    height: 792px;
    border-radius: 20px;
    background-color: #f9f9f9;
    overflow: auto;
`;

const Space = styled.div`
    width: 100%;
    height: 30px;
`;

const TopNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: solid 2px #f2f2f2;
    padding-top: 10px;
`;
