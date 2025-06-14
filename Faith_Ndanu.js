// Function to remove vowels from a given word
function removeVowels(word) {
    return word.replace(/[aeiouAEIOU]/g, '');
    }

    // Get word from command line argument
    const inputWord = process.argv[2];

    if (!inputWord) {
        console.log("Please provide a word as a command line argument.");
            process.exit(1);
            }

            const result = removeVowels(inputWord);
            console.log(`Word without vowels: ${result}`);
            