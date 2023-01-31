import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const CartShareCalNavigationBar = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        // TODO
        navigate(-1);
    };

    const onClickHome = () => {
        navigate(`/`);
    };

    const onClickCartShare = () => {
        navigate(`/cart-share/1`);
    };

    return (
        <NavContainer>
            <div className="nav-left">
                <div onClick={onClickBack}>
                    <img className="arrow-back" src={require('../../assets/arrow-back.png')} />
                </div>
            </div>
            <div className="nav-center">
                <div className="title">쓱총무 정산 내역</div>
            </div>
            <div className="nav-right">
                <div onClick={onClickCartShare}>
                    <img className="cart-share" src={require('../../assets/cart-share.png')} />
                </div>
                <div onClick={onClickHome}>
                    <img className="home" src={require('../../assets/home.png')} />
                </div>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    width: 390px;
    display: flex;
    justify-content: space-between;
    height: 47px;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 4px 2px -2px #0000001c;
    box-sizing: border-box;

    .nav-left {
        width: 130px;
    }
    .nav-center {
        width: 130px;
    }

    img {
        cursor: pointer;
        width: 24px;
    }
    .cart-share {
        padding-bottom: 5px;
        width: 30px;
        margin-right: 7px;
    }
    .nav-right {
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: right;
    }
`;
export default CartShareCalNavigationBar;
