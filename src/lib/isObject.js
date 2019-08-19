export default value => {
    return value && typeof value === 'object' && value.constructor === Object;
};
