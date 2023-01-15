import Login from '../../components/mbr/Login';
import { login } from '../../api/login';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ItemList from '../../components/Item/ItemList';
import { findCartShareList } from '../../api/cart-share';
import { getAllItemList } from '../../api/item';
import { useNavigate } from 'react-router-dom';

const ItemListContainer = () => {

    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);

    const onClickItem = (itemId) => {
        navigate(`/item/${itemId}`);
    };

    useEffect(() => {

        getAllItemList().then(response => {

                console.log(response.data.data.itemList);
                setItemList(response.data.data.itemList);
            },
        );

    }, []);


    return <ItemList itemList={itemList} onClickItem={onClickItem} />;
};

export default ItemListContainer;