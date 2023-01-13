import axios from 'axios';

export const findCartShareList = async () =>
    await axios.get('/api/cart-share', {
        headers: {
            mbrId: 1,
        },
    });

export const findCartShare = async cartShareId =>
    await axios.get(`/api/cart-share/${cartShareId}`, {
        headers: {
            mbrId: 1,
        },
    });
