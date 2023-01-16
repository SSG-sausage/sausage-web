import Login from '../../components/mbr/Login';
import { login } from '../../api/mbr/login';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ItemList from '../../components/item/ItemList';
import { findCartShareList } from '../../api/order/cart-share';
import { getAllItemList } from '../../api/item/item';
import { useNavigate } from 'react-router-dom';

const ItemListContainer = () => {
    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);

    const onClickItem = itemId => {
        navigate(`/item/${itemId}`);
    };

    useEffect(() => {
        getAllItemList().then(response => {
            console.log(response.data.data.itemList);
            setItemList(response.data.data.itemList);
        });
    }, []);

    return <ItemList itemList={itemList} onClickItem={onClickItem} />;
};

export default ItemListContainer;
