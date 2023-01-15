
import ItemDetail from '../../components/Item/ItemDetail';
import { useEffect, useState } from 'react';
import { getAllItemList, getItem } from '../../api/item';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    const [itemImgUrl, setItemImgUrl] = useState();
    const [itemNm, setItemNm] = useState()
    const [itemAmt, setIteAmt] = useState();



    useEffect(() => {

        console.log(itemId)

        getItem(itemId).then(response => {

            console.log(response.data.data);
            setItemImgUrl(response.data.data.itemImgUrl);
            setItemNm(response.data.data.itemNm);
            setIteAmt(response.data.data.itemAmt)

            },
        );

    }, []);


    return <ItemDetail itemImgUrl={itemImgUrl} itemNm={itemNm} itemAmt={itemAmt} itemBrandNm = 'test'/>;
};

export default ItemDetailContainer;