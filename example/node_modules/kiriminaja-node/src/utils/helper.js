/**
 * @param {object} classObject
 * @return {{}}
 */
export function getObjectVars(classObject) {
    let retArr = {}, prop = '';

    for (prop in classObject) {
        if (typeof classObject[prop] !== 'function' && prop !== 'prototype') {
            retArr[prop] = classObject[prop];
        }
    }
    for (prop in classObject.prototype) {
        if (typeof classObject.prototype[prop] !== 'function') {
            retArr[prop] = classObject.prototype[prop];
        }
    }

    return retArr;
}
