import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'

let castArray = []
let fetchedArray = []

function App() { 
  const [fetched, setFetched] = useState(false)

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

  if (fetched == false) {
    console.log('loading')
  } else {
    if (castArray.length == 0) {
      fetchedArray.slice(0, 12).map(item => {
        castArray.push({
          id: item.character.id,
          name: item.character.name,
          imageUrl: item.character.image.medium
        })
      })
    }
  }
}

export default App
