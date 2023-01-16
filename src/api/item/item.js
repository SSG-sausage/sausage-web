import { axiosInstance } from '../instance';

export const getAllItemList = () =>
    axiosInstance.get('/item/api/item').catch(() => {
        alert('상품 리스트 조회 실패');
    });

export const getItem = itemId =>
    axiosInstance.get('/item/api/item/' + itemId).catch(() => {
        alert('상품 조회 실패');
    });

export const saveCartShareItem = (cartShareId, itemId, itemQty) =>
    axiosInstance
        .post('/order/api/cart-share/' + cartShareId + '/cart-share-item', {
            itemId: { itemId },
            itemQty: { itemQty },
        })
        .catch(() => {
            alert('공유 장바구니 담기 실패');
        });
