import React, { useState, useEffect, useRef } from 'react';
import { findCartShareCal, updateCmplYn, saveCartShareNoti } from '../../api/cartsharecal/cartShareCal';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import SearchBox from '../item/SearchBox';

const CartShareCalError = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();
    const [cookies, setCookie] = useCookies(['mbrId']);

    useEffect(() => {}, []);
    return (
        <NotFoundContainer>
            <SearchBox />
            <CalHeader>
                <div class="side"></div>
                <div>쓱총무</div>
                <div className="side"></div>
            </CalHeader>
            <CalContent>
                <div class="desc">쓱총무 서비스에 일시적으로 장애가 발생하였습니다.</div>
            </CalContent>
        </NotFoundContainer>
    );
};
const NotFoundContainer = styled.div`
    position: relative;
    width: 390px;
    height: 797px;
`;

const CalHeader = styled.div`
    width: 390px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .side {
        width: 24px;
        margin: 0px 14px;
    }
    img {
        cursor: pointer;
    }
    div {
        display: flex;
        align-items: center;
        padding-top: 1px;
    }
    box-shadow: 0 4px 2px -2px #0000001c;
`;

const CalContent = styled.div`
    position: relative;
    width: 390px;
    height: 797px;

    .desc {
        color: #888888;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        margin-top: 250px;
    }
`;
export default CartShareCalError;
