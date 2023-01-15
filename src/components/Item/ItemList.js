/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import { Component } from 'react';

const ItemList = () => {

    return (
        <Main>
            <Container>

                <SearchContainer>
                    <img id="logo" src="sausage-logo.png"/>
                    <div id="search-box" ></div>
                    <img id="cart-share" src="cart-share.png"/>
                </SearchContainer>

                <p>상품 랭킹</p>

            </Container>
        </Main>
    );
};

const Main = styled.div`
  width: auto;
  height: 100vh;
  background: #f2f2f2;
  font-family: 'line';
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const Container = styled.div`

  border-radius: 20px;
  text-align: center;
  width: 380px;
  height: 880px;
  background: white;
  font-family: 'line';
`;

const SearchContainer = styled.div`
  
  display: flex;
  
  flex-direction: row;
  
  justify-content: space-around;
  
  margin-top: 20px;
  
  #logo{
    height: 18px;
    align-self: center;
  }
  
  #search-box{
    width: 180px;
    height: 30px;
    border-radius: 20px;
    
    background-color: #f2f2f2;
  }
  
  #cart-share {
    width: 28px;
    height: 28px;
  }




`;


export default ItemList;