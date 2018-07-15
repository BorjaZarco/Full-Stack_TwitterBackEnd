module.exports = function (array, prop) {
    return array.findIndex(item => item.prop === prop);
}