import redirect from './redirect';
import axios from 'axios';
import { setCookie, getCookie, removeCookie } from './session';

export const login = async (username, password) => {
    return axios({
        method: 'post',
        url: '/user/login',
        data: {
            username,
            password,
        },
    })
        .then(({ data }) => {
            setCookie('jwt', data.authToken.token);
            redirect('/auth/profile');
            return null;
        })
        .catch(e => {
            return null;
        });
};

export const register = async (username, password, passwordConf) => {
    return axios({
        method: 'post',
        url: '/user/register',
        data: {
            username,
            password,
        },
    })
        .then(({ data }) => {
            setCookie('jwt', data.authToken.token);
            redirect('/auth/profile');
            return null;
        })
        .catch(e => {
            return null;
        });
};

export const logout = (ctx = {}) => {
    if (process.browser) {
        removeCookie('jwt');
        redirect('/auth/login');
    }
};


export const getJwt = ctx => {
    return getCookie('jwt', ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
    if (isAuthenticated(ctx)) {
        redirect('/auth/profile', ctx);
        return true;
    }
    return false;
};

export const redirectIfNotAuthenticated = ctx => {
    if (!isAuthenticated(ctx)) {
        redirect('/auth/login', ctx);
        return true;
    }
    return false;
};
