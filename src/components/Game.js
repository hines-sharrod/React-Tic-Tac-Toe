import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from './Board';

const Game = () => {

  const [board, setBoard] = useState( Array( 9 ).fill( null ) );
  const [xIsNext, setXisNext] = useState( true );
  const winner = calculateWinner( board );

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  const handleClick = i => {
    // always make a copy of an array to no mutate the state
    const gameBoard = [...board];

    // If user clicks an occupied square or if game is won, return 
    if ( winner || gameBoard[i] ) return;

    // Put an X or O in the click square
    gameBoard[i] = xIsNext ? 'X' : 'O';
    setBoard( gameBoard );
    setXisNext( !xIsNext );
  }

  const jumpTo = () => {

  }

  const renderMoves = () => (
    <button onClick={() => setBoard( Array( 9 ).fill( null ) )}>
      Start Game
    </button>
  )

  return (
    <div style={style}>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + ( xIsNext ? 'X' : 'O' )}</p>
        {renderMoves()}
      </div>
    </div>
  )
}

export default Game
