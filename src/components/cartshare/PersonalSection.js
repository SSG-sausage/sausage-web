import styled from 'styled-components';
import CartShareItem from './CartShareItem';

const PersonalSection = ({ personalItemInfo, onClickPlusOrMinus }) => {
    return (
        <>
            <Container>
                <div id="name">{personalItemInfo.mbrNm}</div>
                {personalItemInfo.mastrYn ? (
                    <img id="master" src={require('../../assets/master.png')} />
                ) : (
                    <>
                        {personalItemInfo.progStatCd === 'DONE' ? (
                            <img id="done" src={require('../../assets/done.png')} />
                        ) : (
                            <img id="inprogress" src={require('../../assets/inprogress.png')} />
                        )}
                    </>
                )}
                <div id="amount">{personalItemInfo.personalAmt.toLocaleString()}</div>
            </Container>
            {personalItemInfo.cartShareItemList.map(it => {
                return (
                    <CartShareItem
                        key={it.cartShareItemId}
                        cartShareItemId={it.cartShareItemId}
                        itemBrandNm={it.itemBrandNm}
                        itemNm={it.itemNm}
                        shppCd={it.shppCd}
                        itemImgUrl={it.itemImgUrl}
                        itemAmt={it.itemAmt.toLocaleString()}
                        itemQty={it.itemQty}
                        editYn={personalItemInfo.editYn}
                        commYn={false}
                        mastrYn={personalItemInfo.mastrYn}
                        onClickPlusOrMinus={onClickPlusOrMinus}
                    />
                );
            })}
        </>
    );
};

const Container = styled.div`
    width: 390px;
    height: 53px;
    background: #a2a1b4;

    #master {
        margin-top: 13px;
        margin-left: 10px;
    }

    #inprogress {
        margin-top: 17px;
        margin-left: 10px;
    }

    #done {
        margin-top: 17px;
        margin-left: 10px;
    }

    #name {
        float: left;
        height: 35px;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 9px;
        margin-left: 30px;
        font-weight: 600;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #amount {
        text-align: right;
        float: right;
        width: 94px;
        height: 35px;
        display: flex;
        justify-content: right;
        align-items: center;
        margin-top: 9px;
        margin-right: 30px;
        font-weight: 600;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }
`;

export default PersonalSection;
