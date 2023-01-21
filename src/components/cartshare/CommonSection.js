import styled from 'styled-components';

const CommonSection = ({ flag }) => {
    return flag ? (
        <CommonSectionContainer>
            <div id="common">공동</div>
            <div id="amount">5,000</div>
        </CommonSectionContainer>
    ) : (
        <></>
    );
};

const CommonSectionContainer = styled.div`
    width: 390px;
    height: 53px;
    background: #a2a1b4;

    #common {
        float: left;
        width: 94px;
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

export default CommonSection;
