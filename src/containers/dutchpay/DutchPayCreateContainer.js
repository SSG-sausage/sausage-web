import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import DutchPayCreate from '../../components/dutchpay/DutchPayCreate';
import { calcDutchPay, findDutchPay } from '../../api/dutchpay/dutchPay';

const DutchPayContainer = () => {
    const navigate = useNavigate();
    const { dutchPayId } = useParams();
    const optList = ['SECTION', 'SPLIT', 'INPUT'];

    const [cookies, setCookie] = useCookies(['mbrId']);

    const [opt, setOpt] = useState('SECTION');
    const [dutchPay, setDutchPay] = useState({});

    // for SECTION
    const [calcResponse, setCalcResponse] = useState({});

    // for SPLIT
    const [dtAmt, setDtAmt] = useState(0);
    const [dtDtlAmt, setDtDtlAmt] = useState(0);
    const [rmd, setRmd] = useState(0);
    const [mbrNum, setMbrNum] = useState(1);

    const onClickOptBtn = e => {
        const selectedClass = 'selected';
        for (let i = 0; i < 3; i++) {
            document.getElementById(optList[i]).classList.remove(selectedClass);
        }
        e.target.classList.add(selectedClass);
        setOpt(e.target.id);
    };

    const onClickBack = cartShareOrdId => {
        navigate(`/cart-share-ord/${cartShareOrdId}/dutch-pay`);
    };

    useEffect(() => {
        calcDutchPay(dutchPayId).then(response => {
            setCalcResponse(response.data.data);
        });
        findDutchPay(cookies.mbrId, dutchPayId).then(response => {
            setDutchPay(response.data.data);
            setMbrNum(response.data.data.dutchPayDtlFindInfoList.length);
            setDtAmt(response.data.data.paymtAmt);
            setDtDtlAmt(parseInt(response.data.data.paymtAmt / response.data.data.dutchPayDtlFindInfoList.length));
            setRmd(response.data.data.paymtAmt % response.data.data.dutchPayDtlFindInfoList.length);
        });
    }, []);

    const calcSplit = n => {
        setDtAmt(n);
        setDtDtlAmt(parseInt(n / mbrNum));
        setRmd(n % mbrNum);
    };

    const onChangeDtAmt = e => {
        calcSplit(Number(e.target.value));
    };

    return (
        <div>
            <DutchPayCreate
                onClickOptBtn={onClickOptBtn}
                onClickBack={onClickBack}
                opt={opt}
                calcResponse={calcResponse}
                dutchPay={dutchPay}
                dtAmt={dtAmt}
                dtDtlAmt={dtDtlAmt}
                rmd={rmd}
                onChangeDtAmt={onChangeDtAmt}
            />
        </div>
    );
};

export default DutchPayContainer;
