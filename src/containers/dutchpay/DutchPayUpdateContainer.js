import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { calcDutchPay, findDutchPay, updateDutchPay } from '../../api/dutchpay/dutchPay';

import DutchPayUpdate from '../../components/dutchpay/DutchPayUpdate';

const DutchPayUpdateContainer = () => {
    const navigate = useNavigate();
    const { dutchPayId } = useParams();

    const [cookies, setCookie] = useCookies(['mbrId']);

    const [opt, setOpt] = useState('');
    const [dutchPay, setDutchPay] = useState({});

    // for SECTION
    const [calcResponse, setCalcResponse] = useState({});

    // for SPLIT
    const [splInput, setSplInput] = useState({
        dtAmt: 0,
        dtDtlAmt: 0,
        dtRmd: 0,
        mbrNum: 1,
    });

    // for INPUT
    const [inpInput, setInpInput] = useState({
        dtAmt: 0,
        dtRmd: 0,
        dtlMap: new Map(),
    });

    const onClickOptBtn = e => {
        setOpt(e.target.id);
    };

    const onClickBack = () => {
        navigate(`/dutch-pay/${dutchPayId}`);
    };
    const onClickSave = () => {
        let request = {
            dutchPayRmd: 0,
            dutchPayAmt: 0,
            dutchPayDtlAmt: 0,
            dutchPayOptCd: opt,
            dutchPayDtlList: [],
        };
        switch (opt) {
            case 'SECTION':
                request.dutchPayRmd = calcResponse.dutchPayRmd;
                request.dutchPayAmt = calcResponse.dutchPayAmt;
                calcResponse.dutchPayDtlList.map((dtl, index) => {
                    request.dutchPayDtlList.push({
                        mbrId: dtl.mbrId,
                        dutchPayDtlAmt: dtl.dutchPayDtlAmt,
                        shppAmt: dtl.shppAmt,
                        commAmt: dtl.commAmt,
                        prAmt: dtl.prAmt,
                    });
                });
                break;
            case 'SPLIT':
                request.dutchPayRmd = splInput.dtRmd;
                request.dutchPayAmt = splInput.dtAmt;
                request.dutchPayDtlAmt = splInput.dtDtlAmt;
                break;
            case 'INPUT':
                request.dutchPayRmd = inpInput.dtRmd;
                request.dutchPayAmt = inpInput.dtAmt;
                inpInput.dtlMap.forEach((v, k) => {
                    request.dutchPayDtlList.push({
                        mbrId: k,
                        dutchPayDtlAmt: v,
                    });
                });
                break;
        }
        updateDutchPay(cookies.mbrId, dutchPayId, request).then(() => {
            navigate(`/dutch-pay/${dutchPayId}`);
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
        calcDutchPay(dutchPayId).then(response => {
            setCalcResponse(response.data.data);
        });
        findDutchPay(cookies.mbrId, dutchPayId).then(response => {
            setOpt(response.data.data.dutchPayOptCd);

            setDutchPay(response.data.data);

            setSplInput({
                mbrNum: response.data.data.dutchPayDtlList.length,
                dtAmt: response.data.data.paymtAmt,
                dtDtlAmt: parseInt(response.data.data.paymtAmt / response.data.data.dutchPayDtlList.length),
                dtRmd: response.data.data.paymtAmt % response.data.data.dutchPayDtlList.length,
            });
            response.data.data.dutchPayDtlList.map((info, index) => {
                setInpInput({
                    ...inpInput,
                    dtlMap: new Map(inpInput.dtlMap.set(info.mbrId, 0)),
                });
            });

            if (response.data.data.dutchPayOptCd === 'SPLIT') {
                setSplInput({
                    ...splInput,
                    dtAmt: response.data.data.dutchPayAmt,
                    dtDtlAmt: response.data.data.dutchPayDtlList[0].dutchPayDtlAmt,
                    dtRmd: response.data.data.dutchPayRmd,
                });
            }
            if (response.data.data.dutchPayOptCd === 'INPUT') {
                console.log('HERE');
                setInpInput({
                    ...inpInput,
                    dtAmt: response.data.data.dutchPayAmt,
                    dtRmd: response.data.data.dutchPayRmd,
                });

                response.data.data.dutchPayDtlList.map((info, index) => {
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
            dutchPay={dutchPay}
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

export default DutchPayUpdateContainer;
