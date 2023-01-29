import styled from 'styled-components';

const searchBox = () => {
    return (
        <SearchContainer>
            <img id="logo" src={require('../../assets/sausage-logo.png')} />
            <div id="search-box"></div>
            <img id="cart-share" src={require('../../assets/cart-share.png')} />
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;

    flex-direction: row;

    justify-content: space-around;

    background-color: white;

    padding-top: 13px;

    #logo {
        height: 18px;
        align-self: center;
    }

    #search-box {
        width: 200px;
        height: 30px;
        border-radius: 20px;

        background-color: #f2f2f2;
    }

    #cart-share {
        width: 28px;
        height: 28px;
    }
`;

export default searchBox;
