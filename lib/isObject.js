export default obj => {
    console.log(obj);
    if (typeof obj === 'undefined') {
        return false;
    }
    if (obj.toString() !== '[object Object]') {
        return false;
    }
    var key;
    for (key in obj) {
        /* assign at least one key for testing below*/
    }
    return !key || obj.hasOwnProperty(key);
};
