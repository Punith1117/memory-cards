import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Scores from './components/Scores'

let fetchedArray = []

function App() { 
  const [fetched, setFetched] = useState(false)
  const [chosenCards, setChosenCards] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [castArray, setCastArray] = useState([])

  useEffect(() => {
    if (fetched == false) {
      fetch('https://api.tvmaze.com/shows/17861/cast')
      .then(result => result.json())
      .then(result => {
        fetchedArray = result
        setFetched(true)
      })
    }
  }, [])

  useEffect(() => {
    let shuffledArray = randomize(castArray)
    setCastArray(shuffledArray)
  }, [chosenCards])

  let setScores = (id) => {
    if (chosenCards.includes(id)) {
      setCurrentScore(0)
      setChosenCards([])
    } else {
      setChosenCards(() => {
        let updatedCards = [...chosenCards, id]
        setCurrentScore(updatedCards.length)
        if (bestScore < updatedCards.length) {
          setBestScore(updatedCards.length)
        }
        return updatedCards
      })
    }
  }
  
  if (fetched == false) {
    return (
      <>
        <header>
          <div className='name-author'>
            <h1>Memory Cards</h1>
            <a href="https://github.com/Punith1117/memory-cards">By Punith1117</a>
          </div>
          <div className="how-to-play">
            <button onClick={() => toggleHowToPlay()}>How To Play</button>
            <p>Test your memory by continously choosing each card not more than once. Your goal is to achieve a best score of 12.</p>
          </div>
        </header>
        <Scores currentScore={currentScore} bestScore={bestScore}></Scores>
        <p>loading...</p>
      </>
    )
  } else {
    if (castArray.length == 0) {
      setCastArray(fetchedArray.slice(0, 12).map(item => (
        {
          id: item.character.id,
          name: item.character.name,
          imageUrl: item.character.image.medium
        }
      )))
    }
    return (
      <>
        <header>
          <div className='name-author'>
            <h1>Memory Cards</h1>
            <a href="https://github.com/Punith1117/memory-cards">By Punith1117</a>
          </div>
          <div className="how-to-play">
            <button onClick={() => toggleHowToPlay()}>How To Play</button>
            <p>Test your memory by continously choosing each card not more than once. Your goal is to achieve a best score of 12.</p>
          </div>
        </header>
        <Scores currentScore={currentScore} bestScore={bestScore}></Scores>
        <Cards castArray={castArray} setScores={setScores}></Cards>
      </>
    )
  }
}

function randomize(array) {
  let newArr = [...array]
  // Iterate over the array in reverse order
  for (let i = newArr.length - 1; i > 0; i--) {
      // Generate Random Index
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function toggleHowToPlay() {
  let instructions = document.querySelector('.how-to-play p')
  instructions.classList.toggle('show')
}

export default App
