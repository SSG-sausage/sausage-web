import ItemDetail from '../../components/item/ItemDetail';
import { useEffect, useState } from 'react';
import { getAllItemList, getItem } from '../../api/item/item';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    const [itemImgUrl, setItemImgUrl] = useState("");
    const [itemNm, setItemNm] = useState("");
    const [itemAmt, setIteAmt] = useState(0);
    const [itemQty, setItemQty] = useState(1);
    const [isPurchaseModalOn, setPurchaseModalOn] = useState(false);

    const plusItemQty = () => {
        setItemQty(itemQty + 1);
    };

    const minusItemQty = () => {
        if (itemQty > 1) {
            setItemQty(itemQty - 1);
        }
    };

    useEffect(() => {

        console.log(itemId);

        getItem(itemId).then(response => {

                console.log(response.data.data);
                setItemImgUrl(response.data.data.itemImgUrl);
                setItemNm(response.data.data.itemNm);
                setIteAmt(response.data.data.itemAmt);
            },
        );

    }, []);


    return <ItemDetail itemImgUrl={itemImgUrl} itemNm={itemNm} itemAmt={itemAmt} itemBrandNm='test'
                       isPurchaseModalOn={isPurchaseModalOn} setPurchaseModalOn={setPurchaseModalOn}
                       itemQty={itemQty} plusItemQty={plusItemQty} minusItemQty = {minusItemQty}/>;
};

export default ItemDetailContainer;