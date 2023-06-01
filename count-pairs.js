// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let arrSorted = arr.sort((a, b) => a- b)
    let pointer1 = 0 
    let pointer2 = arr.length -1
    let found = 0;

    console.log(arr, "OG ARR", arrSorted, "SORTED ARR")

    while(pointer1 < pointer2){
        let sum = arrSorted[pointer1] + arrSorted[pointer2]

        if(sum === target){
            pointer1++;
            pointer2--;
            found++ 
            }

        else if(sum < target){
            pointer1++;
        }
        else{
            pointer2--;
        }
    }

    return found
}

module.exports = countPairs
