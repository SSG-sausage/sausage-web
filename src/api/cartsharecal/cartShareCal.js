import { axiosInstance } from '../instance';

export const findCartShareCal = (mbrId, cartShareCalId) =>
    axiosInstance
        .get(`cart-share-calculation/api/cart-share-cal/${cartShareCalId}`, {
            headers: {
                mbrId,
            },
        })
        .catch(() => {
            alert('정산 조회 실패');
        });

export const findCartShareCalList = cartShareId =>
    axiosInstance
        .get(`cart-share-calculation/api/cart-share-cal`, {
            params: {
                cartShareId: cartShareId,
            },
        })
        .catch(() => {
            alert('정산 리스트 조회 실패');
        });

export const calCartShareCal = cartShareCalId =>
    axiosInstance.get(`cart-share-calculation/api/cart-share-cal/${cartShareCalId}/cal`, {}).catch(() => {
        alert('정산 계산 조회 실패');
    });

export const updateCartShareCal = (mbrId, cartShareCalId, request) =>
    axiosInstance
        .put(`cart-share-calculation/api/cart-share-cal/${cartShareCalId}`, request, {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('정산 수정 실패');
        });

export const updateCmplYn = (mbrId, cartShareCalId, dtlMbrId) =>
    axiosInstance
        .patch(
            `cart-share-calculation/api/cart-share-cal/${cartShareCalId}/mbr-id/${dtlMbrId}/cmpl`,
            {},
            {
                headers: {
                    mbrId: mbrId,
                },
            },
        )
        .catch(() => {
            alert('정산 완료여부 수정 실패');
        });

export const saveCartShareNoti = (mbrId, cartShareCalId) =>
    axiosInstance
        .post(
            `cart-share-calculation/api/cart-share-cal/${cartShareCalId}/noti`,
            {},
            {
                headers: {
                    mbrId: mbrId,
                },
            },
        )
        .catch(() => {
            alert('정산 알림 생성 실패');
        });
