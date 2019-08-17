import Router from 'next/router';

export default (target, ctx = {}) => {
    if (ctx.res) {
        // we are on the server so writehead
        ctx.res.writeHead(303, { Location: target });
        ctx.res.end();
    } else {
        Router.replace(target);
    }
}