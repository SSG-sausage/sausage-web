import ItemDetail from '../../components/item/ItemDetail';
import { useEffect, useState } from 'react';
import { getItem } from '../../api/item/item';
import { saveCartShareItem } from '../../api/cartshare/cartShare';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    const [itemImgUrl, setItemImgUrl] = useState('');
    const [itemNm, setItemNm] = useState('');
    const [itemAmt, setIteAmt] = useState(0);
    const [itemQty, setItemQty] = useState(1);
    const [itemBrandNm, setItemBrandNm] = useState('');
    const [shppCd, setShppCd] = useState('');
    const [isPurchaseModalOn, setPurchaseModalOn] = useState(false);
    const [isNotiModalon, setIsNotiModalOn] = useState(false);
    const [cartItemQty, setCartItemQty] = useState(1);
    const [isNewItemYn, setIsNewItemYn] = useState(false);
    const [isItemModalOn, setItemModalOn] = useState(false);

    const changeItemModalOn = () => {
        setItemModalOn(!isItemModalOn);
    };

    const plusItemQty = () => {
        setItemQty(itemQty + 1);
    };

    const minusItemQty = () => {
        if (itemQty > 1) {
            setItemQty(itemQty - 1);
        }
    };

    const onClickSaveCartShareButton = () => {
        saveCartShareItem(1, parseInt(itemId), itemQty)
            .then(response => {
                console.log(response.data.data);

                if (!response.data.data.newItemYn) {
                    setCartItemQty(response.data.data.itemQty);
                    setIsNewItemYn(true);
                }

                setPurchaseModalOn(false);
                setIsNotiModalOn(true);
                setTimeout(function () {
                    setIsNotiModalOn(false);
                    setIsNewItemYn(false);
                }, 1500);
            })
            .catch(error => {
                console.log(error.response);
                const message = error.response.data.message;
                if (message === '공유장바구니멤버 진행 상태가 담기중 인 경우에만 수정 할 수 있습니다.') {
                    setItemModalOn(true);
                }
            });
    };

    useEffect(() => {
        getItem(itemId).then(response => {
            console.log(response.data.data);
            setItemImgUrl(response.data.data.itemImgUrl);
            setItemNm(response.data.data.itemNm);
            setIteAmt(response.data.data.itemAmt);
            setItemBrandNm(response.data.data.itemBrandNm);
            setShppCd(response.data.data.shppCd);
        });
    }, []);

    return (
        <ItemDetail
            itemImgUrl={itemImgUrl}
            itemNm={itemNm}
            itemAmt={itemAmt}
            itemBrandNm={itemBrandNm}
            isPurchaseModalOn={isPurchaseModalOn}
            setPurchaseModalOn={setPurchaseModalOn}
            itemQty={itemQty}
            plusItemQty={plusItemQty}
            minusItemQty={minusItemQty}
            onClickSaveCartShareButton={onClickSaveCartShareButton}
            isNotiModalon={isNotiModalon}
            cartItemQty={cartItemQty}
            isNewItemYn={isNewItemYn}
            shppCd={shppCd}
            isItemModalOn={isItemModalOn}
            changeItemModalOn={changeItemModalOn}
        />
    );
};

export default ItemDetailContainer;
