// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Map = freqCounter(num1)
    let num2Map = freqCounter(num2)

    // console.log(num1Map, num2Map, "MAPSSSS")

    for(let key of Object.keys(num1Map)){
        if(num2Map[key] == undefined){
            return false
        }
        if(+num2Map[key] !== +num1Map[key]){
            console.log(num2Map[key], num1Map[key], "KEYSSS MATCH")
            return false
        }
    }

    return true
}


function freqCounter(num){

    let numArr = Array.from(String(num))

    let frequencies = {}

    for (let n of numArr){
        let numcount = frequencies[n] || 0
        frequencies[n] = numcount +1
    }

    return  frequencies;

}
module.exports = sameFrequency
