import React from 'react'
import { addColor, getAllcolors, getGrid } from '../store'
import { connect } from 'react-redux'
import './ProjectBoard.css'
import ProjectDetails from './ProjectDetails'
import ProjectGrid from './ProjectGrid'
import ProjectColors from './ProjectColors'
import { Grid } from '@material-ui/core'
import ProjectForm from './ProjectForm'

const ProjectBoard = props => {
  const handleDraw = (row, column) => {
    const color = props.details.color
    let newGrid = [...props.details.grid]
    newGrid[row][column] = newGrid[row][column] === color.RGB ? '' : color.RGB
    props._addColor(color)
    props._getGrid(newGrid)
  }

  return (
    <Grid container direction='column' id='project'>
      <ProjectForm />
      <Grid container id='project-info'>
        <Grid item xs={12} md={2}>
          <ProjectDetails details={props.details} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProjectGrid
            grid={props.details.grid}
            tpi={props.details.tpi}
            onDraw={handleDraw}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <ProjectColors />
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  _getGrid: grid => dispatch(getGrid(grid)),
  _addColor: color => dispatch(addColor(color)),
  _getColors: () => dispatch(getAllcolors())
})

const mapStateToProps = state => {
  return { details: state.details }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard)
