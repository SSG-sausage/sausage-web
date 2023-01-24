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
