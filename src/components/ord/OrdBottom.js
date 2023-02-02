import styled from 'styled-components';
import OrdDetailItem from './OrdDetailItem';
import OrdDetailItemList from './OrdDetailItemList';
import OrdShppInfo from './OrdShppInfo';

const OrdBottom = ({ ssgShppOrdItemMap, tradersShppOrdItemMap }) => {
    return (
        <Container>
            <OrdItemTitle>
                <div>
                    <div>쓱</div>
                    <div> 쓱배송</div>
                </div>
            </OrdItemTitle>

            <OrdItem>
                {Array.from(ssgShppOrdItemMap.keys())
                    .sort(function (a, b) {
                        return a < b ? -1 : a > b ? 1 : 0;
                    })
                    .map((it, index) => (
                        <OrdDetailItemList key={it} mbrNm={it} itemList={ssgShppOrdItemMap.get(it)} />
                    ))}
            </OrdItem>

            <OrdItemTitle>
                <div>
                    <div style={{ background: '#b3dc49' }}>T</div>
                    <div> 쓱배송 Traders</div>
                </div>
            </OrdItemTitle>

            <OrdItem>
                {Array.from(tradersShppOrdItemMap.keys())
                    .sort(function (a, b) {
                        return a < b ? -1 : a > b ? 1 : 0;
                    })
                    .map((it, index) => (
                        <OrdDetailItemList key={it} mbrNm={it} itemList={tradersShppOrdItemMap.get(it)} />
                    ))}
            </OrdItem>
        </Container>
    );
};

export default OrdBottom;

const Container = styled.div`
    height: 520px;
    margin: 0px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: auto;
`;

const OrdItem = styled.div`
    font-size: 10px;
    /* margin-top: 20px; */
`;

const OrdItemTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 10px;
    padding: 13px 15px 13px 20px;
    align-items: center;
    margin: 5px 0 5px 0;
    cursor: pointer;

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;

        div:nth-child(1) {
            width: 25px;
            height: 25px;
            font-size: 15px;
            background-color: #f7d047;
            border-radius: 20px;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }

        div:nth-child(2) {
            font-size: 13px;
            justify-content: center;
            align-items: center;
            padding-left: 5px;
            font-weight: bold;
        }
    }

    p:nth-child(1) {
        font-size: 13px;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
        color: gray;
    }
`;
