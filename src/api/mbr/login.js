import { axiosInstance } from '../instance';

export const login = (id, pwd) =>
    axiosInstance.post('http://localhost:8000/member/api/auth/login', {
        mbrLoginId: id,
        mbrPwd: pwd,
    });
