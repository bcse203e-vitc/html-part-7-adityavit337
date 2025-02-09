function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("Hello, World!")); 
