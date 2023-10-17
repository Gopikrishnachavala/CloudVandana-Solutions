function reverseWords(sentence) {
    let words = sentence.split(/\s+/);
    let reversedWords = words.map(word => reverseString(word));
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}
function reverseString(s) {
    return s.split('').reverse().join('');
}
let inputSentence = "CloudVandana Solutions";
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence:", reversedSentence);
