import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchBox = () => {
    const navigate = useNavigate();

    const onClickCartShare = () => {
        navigate(`/cart-share/1`);
    };
    const onClickHome = () => {
        navigate(`/`);
    };
    return (
        <SearchContainer>
            <div>
                <img id="logo" onClick={onClickHome} src={require('../../assets/sausage-logo.png')} />
            </div>
            <div id="search-box">
                <img id="magnifier" src={require('../../assets/magnifier.png')} />
            </div>
            <div id="cart-share-nav" onClick={onClickCartShare}>
                <img id="cart-share" src={require('../../assets/cart-share.png')} />
            </div>
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
        cursor: pointer;
    }

    #search-box {
        width: 200px;
        height: 30px;
        border-radius: 20px;
        position: relative;
        background-color: #f2f2f2;
    }
    #magnifier {
        position: absolute;
        right: 15px;
        margin-top: 3px;
    }

    #cart-share {
        width: 28px;
        height: 28px;
    }
    #cart-share-nav {
        cursor: pointer;
    }
`;

export default SearchBox;
