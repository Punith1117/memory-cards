import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Scores from './components/Scores'

let castArray = []
let fetchedArray = []

function App() { 
  const [fetched, setFetched] = useState(false)
  const [chosenCards, setChosenCards] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

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
    return (<p>Loading</p>)
  } else {
    if (castArray.length == 0) {
      fetchedArray.slice(0, 12).map(item => (
        castArray.push({
          id: item.character.id,
          name: item.character.name,
          imageUrl: item.character.image.medium
        })
      ))
    }
    return (
      <>
        <Scores currentScore={currentScore} bestScore={bestScore}></Scores>
        <Cards castArray={castArray} setScores={setScores}></Cards>
      </>
    )
  }
}

export default App
