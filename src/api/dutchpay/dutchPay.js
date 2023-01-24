import { axiosInstance } from '../instance';

export const findDutchPay = (mbrId, dutchPayId) =>
    axiosInstance
        .get(`dutch-pay/api/dutch-pay/${dutchPayId}`, {
            headers: {
                mbrId,
            },
        })
        .catch(() => {
            alert('정산 조회 실패');
        });

export const calcDutchPay = dutchPayId =>
    axiosInstance.get(`dutch-pay/api/dutch-pay/${dutchPayId}/calc`, {}).catch(() => {
        alert('정산 계산 조회 실패');
    });

export const updateDutchPay = (mbrId, dutchPayId, request) =>
    axiosInstance
        .put(`dutch-pay/api/dutch-pay/${dutchPayId}`, request, {
            headers: {
                mbrId: mbrId,
            },
        })
        .catch(() => {
            alert('정산 수정 실패');
        });

export const updateCmplYn = (mbrId, dutchPayId, dtlMbrId) =>
    axiosInstance
        .patch(
            `dutch-pay/api/dutch-pay/${dutchPayId}/mbr-id/${dtlMbrId}/cmpl`,
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
