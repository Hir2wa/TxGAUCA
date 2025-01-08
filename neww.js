let arr = [13, 26, 3, 4, 5, 41];
function m(y){
let sortedd = y.sort();
return sortedd

}
console.log(m(arr));




function reverseLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Find the longest word using reduce with if-else
    const longestWord = words.reduce((longest, current) => {
        if (current.length > longest.length) {
            return current;
        } else {
            return longest;
        }
    }, '');

    // Reverse the longest word
    const reversedWord = longestWord.split('').reverse().join('');

    // Capitalize the first letter and lowercase the rest
    const result = reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1).toLowerCase();

    return result;
}

// Test cases
console.log(reverseLongestWord("The question he had was meaningless")); // "Sselgninaem"
console.log(reverseLongestWord("I love JavaScript programming")); // "Gnimmargorp"
console.log(reverseLongestWord("Exploration of the cosmos is easy")); // "Noitarolpxe"
