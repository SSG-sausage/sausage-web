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

    const plusItemQty = () => {
        setItemQty(itemQty + 1);
    };

    const minusItemQty = () => {
        if (itemQty > 1) {
            setItemQty(itemQty - 1);
        }
    };

    const onClickSaveCartShareButton = () => {
        saveCartShareItem(1, parseInt(itemId), itemQty).then(response => {
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
        />
    );
};

export default ItemDetailContainer;
