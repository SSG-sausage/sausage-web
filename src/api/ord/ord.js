import { axiosInstance } from '../instance';

export const getOrdList = cartShareId =>
    axiosInstance.get('/order/api/cart-share/' + cartShareId + '/cart-share-ord').catch(() => {
        alert('주문 리스트 조회 실패');
    });

export const getOrdItemList = (cartShareId, cartShareOrdId) =>
    axiosInstance.get('/order/api/cart-share/' + cartShareId + '/cart-share-ord/' + cartShareOrdId).catch(() => {
        alert('주문 상품 리스트 조회 실패');
    });
