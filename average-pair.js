// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0
    let right = arr.length -1

    while (left< right){
        let average = (arr[left] + arr[right]) / 2;
        console.log(arr, arr[left], arr[right], average, "AVERGAEE")

        if(average === target){
            return true
        }
        else if(average < target)
        left++;
        else
        right--
        ;
    }
    return false

}


module.exports = averagePair;