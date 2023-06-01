// add whatever parameters you deem necessary
function separatePositive(arr) {

    let left = 0
    let right = arr.length-1
    console.log(arr, "INITIAL ARR", left, "LEFT IDX", right, "RIGHT IDX")



    while(left < right){

        if(arr[left] < 0 && arr[right] > 0){

            [arr[left], arr[right]] = [arr[right], arr[left]]

            left ++;
            right--;

            // console.log(arr, "IN WHILE LOOP ARRRRRRRRR")
        }

        else if (arr[left]>0){
                console.log(arr[left], "ARR LEFT ")
                left++;
            }
        else{
            console.log(arr[left],left,  "ARR LEFT ", right, arr[right])
            right--;
            }
        }
      
        console.log(arr, "FINAL ARR ")
        // if(arr[left] < 0){
        //     console.log(arr[left], "THE LEFT ARR val")
        //     let splicedVal = arr.splice(left,1)[0]
        //     arr.push(splicedVal)
        //     console.log(arr, "ARRRRRR")
        //     left ++;
        // }
        // else{
        //     let splicedVal = arr.splice(left,1)[0]
        //     arr.unshift(splicedVal)
        //     right--;
        // }

    return arr;

}


module.exports = separatePositive