import { axiosInstance } from '../instance';

export const findCartShareList = mbrId =>
    axiosInstance
        .get('/cart-share/api/cart-share', {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('공유장바구니 리스트 조회 실패');
        });

export const findCartShare = (mbrId, cartShareId) =>
    axiosInstance
        .get(`/cart-share/api/cart-share/${cartShareId}`, {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('공유장바구니 조회 실패');
        });
