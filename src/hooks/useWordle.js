import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(['hello', 'ninja']);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  const formatGuess = () => {
    console.log('formating guess: ', currentGuess)
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is isCorrect
  // add one to the turn state
  const addNewGuess = () => {

  }

  // handle keyup event and track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    // submit guess 
    if (key === 'Enter') {
      // only add guess if turn < 5
      if (turn > 5) {
        console.log('you used all your guesses');
        return;
      }

      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }

      // check word 5 characters long
      if (currentGuess.length !== 5) {
        console.log('word must be 5 characters long')
        return;
      }

      formatGuess();
    }

    // delete letter
    if (key === 'Backspace') {
      setCurrentGuess(prev => {
        return prev.slice(0, -1)
      });
    }

    // add letter
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => {
          return prev + key
        });
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle;