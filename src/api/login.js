import axios from 'axios';

export const login = (id, pwd) =>
    axios.post('http://localhost:8000/member/api/auth/login', {
            mbrLoginId: id,
            mbrPwd: pwd,
        }, {
            headers: {
                mbrId: 1,
            },
        },
    ).then(

    );