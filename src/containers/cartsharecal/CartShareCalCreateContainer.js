import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartShareCalCreate from '../../components/cartsharecal/CartShareCalCreate';
import { calCartShareCal, findCartShareCal, updateCartShareCal } from '../../api/cartsharecal/cartShareCal';

const CartShareCalCreateContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();

    const [cookies, setCookie] = useCookies(['mbrId']);

    const [opt, setOpt] = useState('SECTION');
    const [cartShareCal, setCartShareCal] = useState({
        ttlPaymtAmt: 0,
    });
    const [openOrdSheet, setOpenOrdSheet] = useState(false);
    // for SECTION
    const [calcResponse, setCalcResponse] = useState({
        calAmt: 0,
        calRmd: 0,
    });

    // for SPLIT
    const [splInput, setSplInput] = useState({
        calAmt: 0,
        calDtlAmt: 0,
        calRmd: 0,
        mbrNum: 1,
    });

    // for INPUT
    const [inpInput, setInpInput] = useState({
        calAmt: 0,
        calRmd: 0,
        dtlMap: new Map(),
    });

    const onClickOptBtn = e => {
        setOpt(e.target.id);
    };

    const onClickBack = () => {
        navigate(`/cart-share-cal/${cartShareCalId}`);
    };

    const onClickOpenSheet = () => {
        setOpenOrdSheet(true);
    };
    const onClickCloseSheet = () => {
        setOpenOrdSheet(false);
    };

    const onClickSave = e => {
        let request = {
            calRmd: 0,
            calAmt: 0,
            calDtlAmt: 0,
            calOptCd: opt,
            cartShareCalDtlList: [],
        };
        switch (opt) {
            case 'SECTION':
                request.calRmd = calcResponse.calRmd;
                request.calAmt = calcResponse.calAmt;
                calcResponse.cartShareCalDtlList.map((dtl, index) => {
                    request.cartShareCalDtlList.push({
                        mbrId: dtl.mbrId,
                        calDtlAmt: dtl.calDtlAmt,
                        shppCst: dtl.shppCst,
                        commAmt: dtl.commAmt,
                        perAmt: dtl.perAmt,
                    });
                });
                break;
            case 'SPLIT':
                request.calRmd = splInput.calRmd;
                request.calAmt = splInput.calAmt;
                request.calDtlAmt = splInput.calDtlAmt;
                break;
            case 'INPUT':
                request.calRmd = inpInput.calRmd;
                request.calAmt = inpInput.calAmt;
                inpInput.dtlMap.forEach((v, k) => {
                    request.cartShareCalDtlList.push({
                        mbrId: k,
                        calDtlAmt: v,
                    });
                });
                break;
        }
        updateCartShareCal(cookies.mbrId, cartShareCalId, request).then(() => {
            navigate(`/cart-share-cal/${cartShareCalId}`);
        });
    };

    useEffect(() => {
        calCartShareCal(cartShareCalId).then(response => {
            setCalcResponse(response.data.data);
        });
        findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
            setCartShareCal(response.data.data);
            setSplInput({
                mbrNum: response.data.data.cartShareCalDtlList.length,
                calAmt: response.data.data.ttlPaymtAmt,
                calDtlAmt: parseInt(response.data.data.ttlPaymtAmt / response.data.data.cartShareCalDtlList.length),
                calRmd: response.data.data.ttlPaymtAmt % response.data.data.cartShareCalDtlList.length,
            });
            response.data.data.cartShareCalDtlList.map((info, index) => {
                setInpInput({
                    ...inpInput,
                    dtlMap: new Map(inpInput.dtlMap.set(info.mbrId, 0)),
                });
            });
        });
    }, []);

    const calcSplit = n => {
        setSplInput({
            ...splInput,
            calAmt: n,
            calDtlAmt: parseInt(n / splInput.mbrNum),
            calRmd: n % splInput.mbrNum,
        });
    };

    const onChangeSplInput = e => {
        calcSplit(Number(e.target.value.replace(/\D/g, '')));
    };

    const onChangeInpInput = (e, mbrId) => {
        setInpInput({
            ...inpInput,
            dtlMap: new Map(inpInput.dtlMap.set(mbrId, Number(e.target.value.replace(/\D/g, '')))),
        });

        let sum = 0;
        inpInput.dtlMap.forEach(v => {
            sum += v;
        });
        sum += inpInput.calRmd;
        setInpInput({
            ...inpInput,
            calAmt: sum,
        });
    };

    const onChangeInpRmd = e => {
        let sum = 0;
        inpInput.dtlMap.forEach(v => {
            sum += v;
        });
        sum += Number(e.target.value.replace(/\D/g, ''));
        setInpInput({
            ...inpInput,
            calRmd: Number(e.target.value.replace(/\D/g, '')),

            calAmt: sum,
        });
    };

    return (
        <div>
            <CartShareCalCreate
                onClickOptBtn={onClickOptBtn}
                onClickBack={onClickBack}
                opt={opt}
                calcResponse={calcResponse}
                cartShareCal={cartShareCal}
                splInput={splInput}
                onChangeSplInput={onChangeSplInput}
                inpInput={inpInput}
                onChangeInpInput={onChangeInpInput}
                onChangeInpRmd={onChangeInpRmd}
                onClickSave={onClickSave}
                openOrdSheet={openOrdSheet}
                onClickOpenSheet={onClickOpenSheet}
                onClickCloseSheet={onClickCloseSheet}
            />
        </div>
    );
};

export default CartShareCalCreateContainer;
