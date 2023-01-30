import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { calCartShareCal, findCartShareCal, updateCartShareCal } from '../../api/cartsharecal/cartShareCal';

import CartShareCalUpdate from '../../components/cartsharecal/CartShareCalUpdate';

const CartShareCalUpdateContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();

    const [cookies, setCookie] = useCookies(['mbrId']);
    const [openOrdSheet, setOpenOrdSheet] = useState(false);

    const [opt, setOpt] = useState('');
    const [cartShareCal, setCartShareCal] = useState({
        ttlPaymtAmt: 0,
    });

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

    const onClickSave = () => {
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
            navigate(`/cart-share-calculation/${cartShareCalId}`);
        });
    };
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

    useEffect(() => {
        calCartShareCal(cartShareCalId).then(response => {
            setCalcResponse(response.data.data);
        });
        findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
            setOpt(response.data.data.calOptCd);

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

            if (response.data.data.calOptCd === 'SPLIT') {
                setSplInput({
                    mbrNum: response.data.data.cartShareCalDtlList.length,
                    calAmt: response.data.data.calAmt,
                    calDtlAmt: response.data.data.cartShareCalDtlList[0].calDtlAmt,
                    calRmd: response.data.data.calRmd,
                });
            }
            if (response.data.data.calOptCd === 'INPUT') {
                response.data.data.cartShareCalDtlList.map((info, index) => {
                    setInpInput({
                        ...inpInput,
                        dtlMap: new Map(inpInput.dtlMap.set(info.mbrId, info.calDtlAmt)),
                    });
                });
                setInpInput({
                    ...inpInput,
                    calAmt: response.data.data.calAmt,
                    calRmd: response.data.data.calRmd,
                });
            }
        });
    }, []);
    return (
        <CartShareCalUpdate
            onClickSave={onClickSave}
            cartShareCal={cartShareCal}
            opt={opt}
            onClickOptBtn={onClickOptBtn}
            onClickBack={onClickBack}
            calcResponse={calcResponse}
            splInput={splInput}
            inpInput={inpInput}
            onChangeSplInput={onChangeSplInput}
            onChangeInpInput={onChangeInpInput}
            onChangeInpRmd={onChangeInpRmd}
            openOrdSheet={openOrdSheet}
            onClickOpenSheet={onClickOpenSheet}
            onClickCloseSheet={onClickCloseSheet}
        />
    );
};

export default CartShareCalUpdateContainer;
