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

export const updateCartShareMbrProg = (mbrId, cartShareId, cartShareMbrId, progStatCd) =>
    axiosInstance
        .patch(
            `/cart-share/api/cart-share/${cartShareId}/cart-share-mbr/${cartShareMbrId}/prog`,
            {
                progStatCd: progStatCd,
            },
            {
                headers: {
                    mbrId: mbrId,
                },
            },
        )
        .catch(() => {
            alert('장바구니 멤버 진행 상태 변경 실패');
        });

export const updateCartShareItemQty = (mbrId, cartShareId, cartShareItemId, qty) =>
    axiosInstance
        .patch(
            `/cart-share/api/cart-share/${cartShareId}/cart-share-item/${cartShareItemId}/qty`,
            {
                qty: qty,
            },
            {
                headers: {
                    mbrId: mbrId,
                },
            },
        )
        .catch(() => {
            alert('장바구니 상품 수량 변경 실패');
        });

export const updateCartShareItemComm = (mbrId, cartShareId, cartShareItemId, commYn) =>
    axiosInstance
        .patch(
            `/cart-share/api/cart-share/${cartShareId}/cart-share-item/${cartShareItemId}/comm`,
            {
                commYn: commYn,
            },
            {
                headers: {
                    mbrId: mbrId,
                },
            },
        )
        .catch(() => {
            alert('장바구니 상품 공통 여부 변경 실패');
        });
