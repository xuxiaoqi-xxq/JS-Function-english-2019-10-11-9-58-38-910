function palindrome(message) {
    let reverseMessage = message.split('').reverse().join('');
    return reverseMessage === message ? true : false;
}

console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true