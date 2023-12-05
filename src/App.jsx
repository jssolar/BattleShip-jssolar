/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'


const width = 8
const candyColors = [
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "yellow"
]

function App() {


  const [currentColorArrangement, setCurrentColorArragement] = useState([])


  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++){
      const randomColor =  candyColors[Math.floor(Math.random()*candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    // console.log(randomColorArrangement)
    setCurrentColorArragement(randomColorArrangement)
  }



  useEffect(()=>{
    createBoard()

  },[])
  console.log(currentColorArrangement)
  
  
  return (
    <div className='app'>
      <div className='game'>
        {
          currentColorArrangement.map((candyColor, index)=>{
            return (
              <img 
                  key={index}
                  style={{backgroundColor: candyColor}}
                  alt={candyColor}

              />
            )
          })
        }
      </div>

    </div>
  )
}

export default App
