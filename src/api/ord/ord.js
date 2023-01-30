import { axiosInstance } from '../instance';

export const getOrdList = cartShareId =>
    axiosInstance.get('/order/api/cart-share/' + cartShareId + '/cart-share-ord').catch(() => {
        alert('주문 리스트 조회 실패');
    });

export const getOrdItemList = (cartShareId, cartShareOrdId) =>
    axiosInstance.get('/order/api/cart-share/' + cartShareId + '/cart-share-ord/' + cartShareOrdId).catch(() => {
        alert('주문 상품 리스트 조회 실패');
    });

export const getOrdItemListCartShareCal = cartShareOrdId =>
    axiosInstance
        .get('/order/api/cart-share-ord/' + cartShareOrdId + '/cart-share-ord-list/cart-share-cal')
        .catch(() => {
            alert('공유장바구니주문 정산 리스트 조회');
        });
