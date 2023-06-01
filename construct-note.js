// add whatever parameters you deem necessary
function constructNote( msg, letters) {
    let msgMap = freqCounter(msg)
    let lettersMap = freqCounter(letters)

    for (let char of msg){
        if(!lettersMap[char] || lettersMap[char] === 0 ){
            return false
        }
        lettersMap[char]--;
    }

    return true

}

function freqCounter(str){ // helper fucntion to creat a frequency map to get an obj of the letters in a string and the num of time is occurs in the string
    let freqMap = {} // start with empty obj

    for (let letter of str){ // loop over each letter in the string
        let letterCount = freqMap[letter] || 0 // the number of letters in that string will either be a key in the obj already or we can set it to 0
        freqMap[letter] = letterCount +1 //the letter (key in obj) will be added +1 
    }

    return freqMap
}

module.exports = constructNote;