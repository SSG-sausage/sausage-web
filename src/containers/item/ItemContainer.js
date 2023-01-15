import Login from '../../components/mbr/Login';
import { login } from '../../api/login';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ItemList from '../../components/Item/ItemList';
import { findCartShareList } from '../../api/cart-share';
import { getAllItemList } from '../../api/item';

const ItemListContainer = () => {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {

        getAllItemList().then(response => {

                console.log(response.data.data.itemList);
                setItemList(response.data.data.itemList);
            },
        );

    }, []);


    return <ItemList itemList={itemList} />;
};

export default ItemListContainer;