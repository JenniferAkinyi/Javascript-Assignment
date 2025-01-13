function repetitiveNumbers(password) {
    const removeWords = password.replace(/\D/g, "")
  for (let i = 0; i < removeWords.length - 1; i++) {
    if (removeWords[i] === removeWords[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(repetitiveNumbers("pass123111word"));
console.log(repetitiveNumbers("secure456password"));
