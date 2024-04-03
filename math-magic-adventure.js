// math-magic-adventure.js

class MathMagicAdventure {
    constructor() {
        this.numbers = [
            { word: 'zero', number: 0 },
            { word: 'one', number: 1 },
            { word: 'two', number: 2 },
            { word: 'three', number: 3 },
            { word: 'four', number: 4 },
            { word: 'five', number: 5 },
            { word: 'six', number: 6 },
            { word: 'seven', number: 7 },
            { word: 'eight', number: 8 },
            { word: 'nine', number: 9 },
            { word: 'ten', number: 10 }
        ];
    }

    // Generate a random number word and ask the user to input the corresponding number
    playGame() {
        const randomNumber = Math.floor(Math.random() * this.numbers.length);
        const numberToGuess = this.numbers[randomNumber];

        const guess = prompt(`Type the number corresponding to the word "${numberToGuess.word}"`);

        if (guess !== null) {
            const parsedGuess = parseInt(guess, 10);
            if (!isNaN(parsedGuess)) {
                if (parsedGuess === numberToGuess.number) {
                    console.log('Congratulations! You guessed it right!');
                } else {
                    console.log(`Oops! The correct answer was ${numberToGuess.number}.`);
                }
            } else {
                console.log('Invalid input. Please enter a number.');
            }
        }
    }
}

module.exports = MathMagicAdventure;
