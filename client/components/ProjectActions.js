import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { savePDF } from './PDFGenerator.js'
import { connect } from 'react-redux'

const ProjectActions = props => {
  const handlePrintClick = () => {
    savePDF(props.details)
  }

  return (
    <Grid container direction='row-reverse' spacing={2}>
      <Grid item>
        <Button color='default' variant='contained'>
          Restart
        </Button>
      </Grid>
      <Grid item>
        <Button color='primary' variant='contained'>
          Save
        </Button>
      </Grid>
      <Grid item>
        <Link to='/pdf/12345'>
          <Button
            color='secondary'
            variant='contained'
            onClick={handlePrintClick}
            id='print-button'
          >
            Print
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return { details: state.details }
}

export default connect(mapStateToProps, null)(ProjectActions)
