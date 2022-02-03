import './App.css';
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import gameGrid from './game-grid'

type GameUpdateResponse = {
  data: {
    area: number,
    top: number,
    bottom: number,
    left: number,
    right: number
  }
}

function App() {
  const [game, setGame] = useState(gameGrid)
  const [maxRect, setMaxRect] = useState<any>()

  const getCellColor = (rowIndex: number, cellIndex: number, cell?: number) => {
    try {
      const { top, left, right, bottom } = maxRect
      if (top <= rowIndex && rowIndex <= bottom && left <= cellIndex && cellIndex <= right) {
        return 'game-cell-maxRect'
      } else {
        return cell === 1 ? 'game-cell-active' : 'game-cell-inactive'
      }
    } catch (error) {
      return cell === 1 ? 'game-cell-active' : 'game-cell-inactive'
    }
  }

  const toggleCell = (rowIndex: number, cellIndex: number) => {
    game[rowIndex][cellIndex]
      = game[rowIndex][cellIndex]
        === 0 ? 1 : 0
    setGame([...game])
    axios.post('/', { game: game }).then((data: AxiosResponse) => {
      const { data: { area, top, bottom, left, right } } = data as GameUpdateResponse
      setMaxRect({
        area,
        top,
        bottom,
        left,
        right
      })
    }).catch((err) => console.log(err))
  }

  const grid = game.map((row, rowIndex) => (
    <div className='game-row' key={`row-${rowIndex}`}>
      {
        row.map((cell, cellIndex) => {
          return (
            <div onClick={() => toggleCell(rowIndex, cellIndex)} className={`game-cell ${getCellColor(rowIndex, cellIndex, cell)}`} key={`row-${rowIndex}-${cellIndex}`}></div>
          )
        })
      }
    </div >
  ))


  return (
    <div className="App">
      <div className='game'>
        {grid}
      </div>
      <div>
        Max Area: {maxRect && maxRect.area ? maxRect.area : 0}
      </div>
    </div>
  );
}

export default App;
