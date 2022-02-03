import './App.css';
import { useState } from 'react'
import gameGrid from './game-grid'

function App() {
  const [game, setGame] = useState(gameGrid)

  const grid = game.map((row, rowIndex) => (
    <div className='game-row' key={`row-${rowIndex}`}>
      {
        row.map((cell, cellIndex) => {
          return (
            <div onClick={() => toggleCell(rowIndex, cellIndex)} className={`game-cell ${cell === 1 ? 'game-cell-active' : 'game-cell-inactive'}`} key={`row-${rowIndex}-${cellIndex}`}></div>
          )
        })
      }
    </div >
  ))

  const toggleCell = (rowIndex: number, cellIndex: number) => {
    game[rowIndex][cellIndex]
      = game[rowIndex][cellIndex]
        === 0 ? 1 : 0
    setGame([...game])
  }

  return (
    <div className="App">
      <div className='game'>
        {grid}
      </div>
    </div>
  );
}

export default App;
