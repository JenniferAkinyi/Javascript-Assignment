function panagram(str){
    const regex = /([a-z])(?!.*\1)/g;
    if((str.toLowerCase().match(regex) || []).length === 26){
        return true
    }
    return false
}
console.log(panagram("The quick brown fox jumps over the lazy dog"));
console.log(panagram("Hello, World!"));