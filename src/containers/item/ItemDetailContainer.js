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
    const [isPurchaseModalOn, setPurchaseModalOn] = useState(false);

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
            setPurchaseModalOn(false);
        });
    };

    useEffect(() => {
        getItem(itemId).then(response => {
            console.log(response.data.data);
            setItemImgUrl(response.data.data.itemImgUrl);
            setItemNm(response.data.data.itemNm);
            setIteAmt(response.data.data.itemAmt);
            setItemBrandNm(response.data.data.itemBrandNm);
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
        />
    );
};

export default ItemDetailContainer;
