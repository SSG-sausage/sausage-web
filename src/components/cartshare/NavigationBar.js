import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useParams, useNavigate } from 'react-router-dom';
import * as stompjs from '@stomp/stompjs';
import { findCartShareNotiCnt } from '../../api/cartshare/cartShare';

const NavigationBar = ({ nm, itemQty }) => {
    const navigate = useNavigate();

    const [notiCnt, setNotiCnt] = useState(0);
    const [cookies, setCookie] = useCookies(['mbrId']);
    const client = useRef({});

    const onClickNoti = () => {
        navigate(`/cart-share/noti`);
    };
    const connect = () => {
        client.current = new stompjs.Client({
            brokerURL: 'ws://localhost:8082/ws',
            onConnect: () => {
                subscribe();
            },
        });
        client.current.activate();
    };

    const subscribe = () => {
        client.current.subscribe('/sub/mbr/' + cookies.mbrId, body => {
            const jsonBody = JSON.parse(body.body);
            fetchCartShareCnt();
        });
    };

    const fetchCartShareCnt = async () => {
        const response = await findCartShareNotiCnt(cookies.mbrId);
        setNotiCnt(response.data.data.cnt);
    };

    useEffect(() => {
        connect();

        fetchCartShareCnt();
    }, []);

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
                <NotiIcon onClick={onClickNoti}>
                    <img id="bell" src={require('../../assets/bell.png')} />
                    <div className="cart-share-noti-cnt">{notiCnt}</div>
                </NotiIcon>
                <div>
                    <img id="magnifier" src={require('../../assets/magnifier.png')} />
                </div>
                <div>
                    <img id="home" src={require('../../assets/home.png')} />
                </div>
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
    display: flex;
    justify-content: right;
    height: 47px;

    #bell {
        margin-top: 10px;
        margin-right: 13px;
        width: 18px;
    }

    #home {
        margin-top: 10px;
        margin-right: 8px;
    }

    #magnifier {
        margin-top: 10px;
        margin-right: 10px;
    }
`;
const NotiIcon = styled.div`
    position: relative;
    cursor: pointer;
    .cart-share-noti-cnt {
        position: absolute;
        top: 10.5px;
        right: 10.5px;
        background: red;
        border-radius: 50%;
        width: 11px;
        height: 11px;
        color: #ffffff;
        font-size: 10px;
        line-height: 12.5px;
        text-align: center;
    }
`;

export default NavigationBar;
