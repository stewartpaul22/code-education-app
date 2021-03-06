import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = (props) => {

  let grid = [];

  for (let i = 0; i < props.squaredSize; i++){
    // build as many rows as squaredSize
    const row = [];
    // for each row, build as many cells as squaredSize
    for (let j = 0; j < props.squaredSize; j++){
      // give id counting from 0
      const cellIndex = j + (props.squaredSize * i);
      const cell = <Cell key={j} value={props.cellStates[cellIndex]} />
      row.push(cell);
    }
    // add rows to grid
    grid.push(
      <div className='row' key={i} >
        {row}
      </div>
    )
  }

  return  (
    <section className="grid">
      {grid}
    </section>
  )
}

export default Grid;
