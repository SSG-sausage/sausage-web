import Login from '../../components/mbr/Login';
import { login } from '../../api/mbr/login';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ItemList from '../../components/item/ItemList';
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
            const map = new Map(Object.entries(response.data.data.itemMap));
            const values = Array.from(map.values());

            console.log(values);
            setItemList(values);
        });
    }, []);

    return <ItemList itemList={itemList} onClickItem={onClickItem} />;
};

export default ItemListContainer;
