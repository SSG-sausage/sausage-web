import styled from 'styled-components';

const NavigationBar = ({ nm, itemQty }) => {
    return (
        <>
            <NavigationBarLeft>
                <img id="arrow-back" src={require('../../assets/arrow-back.png')} />
            </NavigationBarLeft>
            <NavigationBarMiddle>
                <p id="title">
                    <b>[함께장보기]</b>
                    {nm}({itemQty}개)
                    <img id="polygon" src={require('../../assets/polygon.png')} />
                </p>
            </NavigationBarMiddle>
            <NavigationBarRight>
                <img id="invoice" src={require('../../assets/invoice.png')} />
                <img id="magnifier" src={require('../../assets/magnifier.png')} />
                <img id="home" src={require('../../assets/home.png')} />
            </NavigationBarRight>
        </>
    );
};

const NavigationBarMiddle = styled.div`
    float: left;
    height: 47px;
    width: 170px;
    text-align: center;

    #title {
        margin-top: 15px;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }

    #polygon {
        margin-left: 8px;
    }
`;

const NavigationBarLeft = styled.div`
    float: left;
    height: 47px;
    width: 110px;

    #arrow-back {
        margin-top: 14px;
        margin-left: 10px;
    }
`;

const NavigationBarRight = styled.div`
    float: left;
    text-align: right;
    height: 47px;
    width: 110px;

    #invoice {
        margin-top: 10px;
        margin-right: 5px;
    }

    #home {
        margin-top: 10px;
        margin-right: 10px;
    }

    #magnifier {
        margin-top: 10px;
        margin-right: 5px;
    }
`;

export default NavigationBar;
