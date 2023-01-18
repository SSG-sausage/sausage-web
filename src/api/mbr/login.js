import { axiosInstance } from '../instance';

export const login = (id, pwd) =>
    axiosInstance.post('/member/api/auth/login', {
        mbrLoginId: id,
        mbrPwd: pwd,
    });
