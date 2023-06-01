// add whatever parameters you deem necessary
function isSubsequence(characters, string) {

    let charIdx = 0 
    let stringIdx = 0

    while (stringIdx < string.length && charIdx < characters.length){
        if (characters[charIdx] === string[stringIdx]){
            charIdx++;
        }

        stringIdx++;

    }

    return charIdx === characters.length; // once this is true we return true otherwise its false

}


module.exports = isSubsequence