import React from "react";
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '245px',
  height: '245px',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ( { squares, onClick } ) => (
  <div style={style}>
    {squares.map( ( square, i ) => (
      <Square key={i} value={square} onClick={() => onClick( i )} />
    ) )}
  </div>
)

export default Board;
