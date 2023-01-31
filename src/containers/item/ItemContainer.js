import Login from '../../components/mbr/Login';
import { login } from '../../api/mbr/login';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ItemList from '../../components/item/ItemList';
import { getAllItemList } from '../../api/item/item';
import { useNavigate } from 'react-router-dom';
import { saveCartShareItem } from '../../api/cartshare/cartShare';

const ItemListContainer = () => {
    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
    const [isNotiModalon, setIsNotiModalOn] = useState(false);
    const [cartItemQty, setCartItemQty] = useState(1);
    const [isNewItemYn, setIsNewItemYn] = useState(false);

    const onClickItem = itemId => {
        navigate(`/item/${itemId}`);
    };

    useEffect(() => {
        getAllItemList().then(response => {
            const map = new Map(Object.entries(response.data.data.itemMap));
            const values = Array.from(map.values());

            console.log(values);
            setItemList(values);
        });
    }, []);

    const onClickSaveCartShareButton = nowClickedItem => {
        saveCartShareItem(1, parseInt(nowClickedItem), 1).then(response => {
            console.log(response.data.data);

            if (!response.data.data.newItemYn) {
                setCartItemQty(response.data.data.itemQty);
                setIsNewItemYn(true);
            }

            setIsNotiModalOn(true);
            setTimeout(function () {
                setIsNotiModalOn(false);
                setIsNewItemYn(false);
            }, 1500);
        });
    };

    return (
        <ItemList
            itemList={itemList}
            onClickItem={onClickItem}
            isNotiModalon={isNotiModalon}
            cartItemQty={cartItemQty}
            isNewItemYn={isNewItemYn}
            onClickSaveCartShareButton={onClickSaveCartShareButton}
        />
    );
};

export default ItemListContainer;
