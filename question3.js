function reverse(str) {
    let splitString = str.split('')
    let reverseString = splitString.reverse()
    let joinArray = reverseString.join('')

    return joinArray
}
console.log(reverse('hello'))