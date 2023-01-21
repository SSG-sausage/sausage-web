import styled from 'styled-components';

const PersonalSection = ({ flag }) => {
    return flag ? (
        <Container>
            <div id="name">전미림</div>
            <img id="master" src={require('../../assets/master.png')} />
            {/* <img id="inprogress" src={require('../../assets/inprogress.png')} /> */}
            {/* <img id="done" src={require('../../assets/done.png')} /> */}
            <div id="amount">5,000</div>
        </Container>
    ) : (
        <></>
    );
};

const Container = styled.div`
    width: 390px;
    height: 53px;
    background: #a2a1b4;

    #master {
        margin-top: 13px;
    }

    #inprogress {
        margin-top: 17px;
    }

    #done {
        margin-top: 17px;
    }

    #name {
        float: left;
        width: 60px;
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
