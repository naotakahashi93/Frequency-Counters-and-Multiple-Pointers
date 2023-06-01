// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let returnObj = {}

    for (let idx in arr1){
        returnObj[arr1[idx]] = arr2[idx] || null
    }

    return returnObj
}

module.exports = twoArrayObject;