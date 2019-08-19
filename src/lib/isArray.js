export default arr => {
    return Object.prototype.toString.apply(arr) === '[object Array]';
};
