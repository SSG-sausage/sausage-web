import styled from 'styled-components';

const CartShareItem = ({}) => {
    return (
        <Container>
            <ShppContainer>
                <img id="ssgshpp" src={require('../../assets/ssgshpp.png')}></img>
                {/* <img id="tradersshpp" src={require('../../assets/tradersshpp.png')}></img> */}
            </ShppContainer>
            <ImageContainer>
                <div id="checkbox"></div>
                <img id="image" src="https://sitem.ssgcdn.com/76/82/32/item/1000518328276_i1_1100.jpg" />
            </ImageContainer>
            <ItemContainer>
                <ItemInfoWrapper>
                    <p id="item-info">
                        <p id="brand">브랜드 이름</p>
                        <p id="name">상품명</p>
                    </p>
                    <p id="item-price">
                        <p id="price">5,000</p>
                        <p id="won">원</p>
                    </p>
                </ItemInfoWrapper>
                <ItemEditWrapper>
                    <img class="common" id="common" src={require('../../assets/common.png')}></img>
                    {/* <img class="common" id="my" src={require('../../assets/my.png')}></img> */}
                    <img id="trash" src={require('../../assets/trash.png')}></img>
                    <ItemQtyWrapper>
                        <img id="minus" src={require('../../assets/minus.png')}></img>
                        <p id="qty">1</p>
                        <img id="plus" src={require('../../assets/plus.png')}></img>
                    </ItemQtyWrapper>
                </ItemEditWrapper>
            </ItemContainer>
        </Container>
    );
};

const ItemQtyWrapper = styled.div`
    width: 89px;
    height: 27px;
    position: absolute;
    top: 60px;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    #qty {
        font-weight: 700;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #minus {
        position: absolute;
        justify-content: left;
        left: 0;
    }

    #plus {
        position: absolute;
        text-align: right;
        right: 0;
    }
`;

const ItemEditWrapper = styled.div`
    position: absolute;
    width: 99px;
    height: 94px;
    margin-left: 180px;

    .common {
        position: absolute;
        top: 7px;
        right: 41px;
    }

    #trash {
        position: absolute;
        top: 7px;
        right: 9px;
    }
`;

const ItemInfoWrapper = styled.div`
    position: absolute;
    width: 180px;
    height: 94px;

    #item-info {
        position: absolute;
        width: 177px;
        height: 36px;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-left: 3px;
        letter-spacing: -0.5px;
        font-size: 15px;
        line-height: 17px;
    }

    #item-price {
        width: 172px;
        height: 40px;
        margin-top: 54px;
        margin-left: 8px;
        display: flex;
        justify-content: left;
        align-items: center;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #brand {
        font-weight: 600;
    }

    #name {
        margin-left: 3px;
    }

    #price {
        font-weight: 700;
    }

    #won {
        margin-left: 3px;
    }
`;

const ItemContainer = styled.div`
    position: absolute;
    width: 279px;
    height: 94px;
    margin-top: 38px;
    margin-left: 103px;
`;

const ImageContainer = styled.div`
    position: absolute;
    width: 93px;
    height: 93px;
    margin-top: 38px;
    margin-left: 10px;

    #checkbox {
        box-sizing: border-box;
        position: absolute;
        width: 19px;
        height: 19px;
        left: 0px;
        top: 0.5px;
        background: #ffffff;
        border: 1px solid #a2a1b4;
        border-radius: 5px;
    }

    #image {
        width: 93px;
        height: 93px;
    }
`;

const ShppContainer = styled.div`
    position: absolute;
    width: 100px;
    height: 23px;
    margin-top: 9px;
    margin-left: 10px;
`;

const Container = styled.div`
    width: 390px;
    height: 150px;
`;

export default CartShareItem;
