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
    const [isItemModalOn, setItemModalOn] = useState(false);

    const onClickItem = itemId => {
        navigate(`/item/${itemId}`);
    };

    const changeItemModalOn = () => {
        setItemModalOn(!isItemModalOn);
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
        saveCartShareItem(1, parseInt(nowClickedItem), 1)
            .then(response => {
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
            })
            .catch(error => {
                const message = error.response.data.message;
                if (message === '공유장바구니멤버 진행 상태가 담기중 인 경우에만 수정 할 수 있습니다.') {
                    setItemModalOn(true);
                }
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
            isItemModalOn={isItemModalOn}
            changeItemModalOn={changeItemModalOn}
        />
    );
};

export default ItemListContainer;
