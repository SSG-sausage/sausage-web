import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { calCartShareCal, findCartShareCal, updateCartShareCal } from '../../api/cartsharecal/cartShareCal';

import DutchPayUpdate from '../../components/cartsharecal/DutchPayUpdate';

const CartShareCalUpdateContainer = () => {
    const navigate = useNavigate();
    const { cartShareCalId } = useParams();

    const [cookies, setCookie] = useCookies(['mbrId']);

    const [opt, setOpt] = useState('');
    const [cartShareCal, setCartShareCal] = useState({});

    // for SECTION
    const [calcResponse, setCalcResponse] = useState({});

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
        navigate(`/cart-share-calculation/${cartShareCalId}`);
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
                calcResponse.dutchPayDtlList.map((dtl, index) => {
                    request.dutchPayDtlList.push({
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
            dtAmt: n,
            dtDtlAmt: parseInt(n / splInput.mbrNum),
            dtRmd: n % splInput.mbrNum,
        });
    };

    const onChangeSplInput = e => {
        calcSplit(Number(e.target.value));
    };

    const onChangeInpInput = (e, mbrId) => {
        setInpInput({
            ...inpInput,
            dtlMap: new Map(inpInput.dtlMap.set(mbrId, Number(e.target.value))),
        });

        let sum = 0;
        inpInput.dtlMap.forEach(v => {
            sum += v;
        });
        sum += inpInput.dtRmd;
        setInpInput({
            ...inpInput,
            dtAmt: sum,
        });
    };

    const onChangeInpRmd = e => {
        let sum = 0;
        inpInput.dtlMap.forEach(v => {
            sum += v;
        });
        sum += Number(e.target.value);
        setInpInput({
            ...inpInput,
            dtRmd: Number(e.target.value),

            dtAmt: sum,
        });
    };

    useEffect(() => {
        calCartShareCal(cartShareCalId).then(response => {
            setCalcResponse(response.data.data);
        });
        findCartShareCal(cookies.mbrId, cartShareCalId).then(response => {
            setOpt(response.data.data.dutchPayOptCd);

            setCartShareCal(response.data.data);

            setSplInput({
                mbrNum: response.data.data.cartShareCalDtlList.length,
                calAmt: response.data.data.calAmt,
                calDtlAmt: parseInt(response.data.data.ttlPaymtAmt / response.data.data.cartShareCalDtlList.length),
                calRmd: response.data.data.paymtAmt % response.data.data.cartShareCalDtlList.length,
            });
            response.data.data.cartShareCalDtlList.map((info, index) => {
                setInpInput({
                    ...inpInput,
                    dtlMap: new Map(inpInput.dtlMap.set(info.mbrId, 0)),
                });
            });

            if (response.data.data.calOptCd === 'SPLIT') {
                setSplInput({
                    ...splInput,
                    calAmt: response.data.data.dutchPayAmt,
                    calDtlAmt: response.data.data.dutchPayDtlList[0].dutchPayDtlAmt,
                    calRmd: response.data.data.dutchPayRmd,
                });
            }
            if (response.data.data.calOptCd === 'INPUT') {
                console.log('HERE');
                setInpInput({
                    ...inpInput,
                    calDtlAmt: response.data.data.calDtlAmt,
                    calRmd: response.data.data.calRmd,
                });

                response.data.data.cartShareCalDtlList.map((info, index) => {
                    setInpInput({
                        ...inpInput,
                        dtlMap: new Map(inpInput.dtlMap.set(info.mbrId, info.dutchPayDtlAmt)),
                    });
                });
            }
        });
    }, []);
    return (
        <DutchPayUpdate
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
        />
    );
};

export default CartShareCalUpdateContainer;
