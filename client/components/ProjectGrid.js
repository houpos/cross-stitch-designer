import React from 'react'

const ProjectGrid = props => {
  const grid = props.grid
  return (
    <div id='grid'>
      {grid.map((row, rowIdx) => {
        return (
          <div
            className='row'
            key={rowIdx}
            style={
              rowIdx % props.tpi === 0 && rowIdx !== 0
                ? { borderBottomColor: 'black', borderBottomWidth: '2px' }
                : {}
            }
          >
            {row.map((cell, cellIdx) => {
              return (
                <div
                  className='cell'
                  key={cellIdx}
                  style={
                    cellIdx % props.tpi === 0 && cellIdx !== 0
                      ? {
                          borderLeftColor: 'black',
                          backgroundColor: grid[rowIdx][cellIdx]
                        }
                      : {
                          backgroundColor: grid[rowIdx][cellIdx]
                        }
                  }
                  onClick={() => props.onDraw(rowIdx, cellIdx, event)}
                />
              )
            })}
          </div>
        )
      }) || <div />}
    </div>
  )
}

export default ProjectGrid
