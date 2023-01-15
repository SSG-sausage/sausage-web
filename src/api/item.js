import { axiosInstance } from './instance';

export const getAllItemList = () =>
    axiosInstance.get('http://localhost:8000/item/api/item',
    ).catch(() => {
        alert('로그인 실패');
    });
