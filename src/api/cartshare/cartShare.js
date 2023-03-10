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
    axiosInstance.patch(
        `/cart-share/api/cart-share/${cartShareId}/cart-share-item/${cartShareItemId}/qty`,
        {
            qty: qty,
        },
        {
            headers: {
                mbrId: mbrId,
            },
        },
    );

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

export const deleteCartShareItem = (mbrId, cartShareId, cartShareItemId) =>
    axiosInstance.delete(`/cart-share/api/cart-share/${cartShareId}/cart-share-item/${cartShareItemId}`, {
        headers: {
            mbrId: mbrId,
        },
    });

export const findCartShareNotiList = mbrId =>
    axiosInstance
        .get('/cart-share/api/cart-share/noti', {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('장바구니 알림 리스트 조회 실패');
        });

export const findCartShareNotiCnt = mbrId =>
    axiosInstance
        .get('/cart-share/api/cart-share/noti/cnt', {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('장바구니 신규 알림 개수 조회 실패');
        });

export const saveCartShareItem = (cartShareId, itemId, itemQty) =>
    axiosInstance.post(`/cart-share/api/cart-share/${cartShareId}/cart-share-item`, {
        itemId: itemId,
        itemQty: itemQty,
    });

export const validateMastr = (cartShareId, mbrId) =>
    axiosInstance.get(`/cart-share/api/cart-share/${cartShareId}/mbr/${mbrId}/mastr-validation`, {}).catch(() => {
        alert('장바구니 마스터 권한 체크 실패');
    });
