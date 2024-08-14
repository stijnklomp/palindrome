// Reverse string recursive function
const reverseString = (originalString, reversedString = "", i = 1) =>
      originalString.length == reversedString.length
    ? reversedString
    : reverseString(
                originalString,
                reversedString + originalString[originalString.length - i],
                i + 1
              ); // Tail-recursive (Tail call optimized function)

// Is word a palindrome
    // 1) Split word
    // 2) Reverse second half
    // 3) Compare halfs

    // Example:
    // word: level
    // 1) 1st half: le(v) && 2nd half: (v)el
    // 2) 2nd half: el => le
    // 3) 1st half: le == 2nd half: le
const palindrome = word => word.substr(0, Math.floor(word.length / 2)) == reverseString(word.substr(Math.ceil(word.length / 2)))

const word = "level"
console.log(`Is ${word} a palindrome: ${palindrome(word)}`)
