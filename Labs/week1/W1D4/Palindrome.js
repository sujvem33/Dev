//Palindrome

function palindrome(word) {
    let reversed = reverseword (word)
    if (word == reversed)
    {
        return true
    }
    return false
}
console.log (Palindrome("racecar"))

function reverseword(word) {
    let newword = ""

}
for (let i=word.lenghth-1; i >=0; i--) {
        if (string[i] !== string[len - 1 - i])