/** @jsxImportSource @emotion/react */
import styled from 'styled-components';

const Login = ({ onClickLoginBnt, onChangeMbr }) => {
    return (
        <LoginContainer>
            <LoginTitle>
                <h1>로그인</h1>
            </LoginTitle>

            <InputBox>
                <input name="id" type="text" placeholder="아이디" onChange={onChangeMbr} />
                <input
                    name="pwd"
                    type="password"
                    placeholder="비밀번호 (영문,숫자 조합 8~20자리)"
                    onChange={onChangeMbr}
                />
            </InputBox>

            <LoginBox onClick={onClickLoginBnt}>로그인</LoginBox>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    text-align: center;
    //padding-top: 5px;
`;

const LoginTitle = styled.div`
    display: flex;

    height: 50px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 2px #f2f2f2;

    > h1 {
        font-size: 20px;
        //margin-bottom: 15px;
    }
`;

const InputBox = styled.div`
    margin-top: 30px;

    > input {
        width: 280px;
        height: 40px;
        background: white;
        color: darkgray;
        margin-bottom: 3px;
        padding-left: 20px;
        border: solid 1.5px #f0f0f0;

        :focus {
            outline: none;
        }
    }
`;

const LoginBox = styled.button`
    width: 280px;
    line-height: 40px;
    height: 40px;
    background: #eb4f47;
    color: white;
    text-align: center;
    border: none;
    margin-top: 20px;
    cursor: pointer;

    :hover {
        background-color: #ff3905;
    }
`;

export default Login;
