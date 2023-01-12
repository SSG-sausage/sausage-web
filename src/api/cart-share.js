import axios from 'axios';

export const findCartShareList = async () =>
    await axios.get('/api/cart-share', {
        headers: {
            mbrId: 1,
        },
    });
