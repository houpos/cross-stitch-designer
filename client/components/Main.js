import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setProjectDetails } from '../store'

import {
  Grid,
  Button,
  TextField,
  MenuItem,
  InputAdornment
} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'

import '../../public/styles.css'

const fabricTypes = ['Aida', 'Linen', 'Evenweave', 'Belfast']

const Main = props => {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [margin, setMargin] = useState(0)
  const [tpi, setTPI] = useState(0)
  const [fabric, setFabric] = useState('Aida')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (evt) => {
    const val = evt.target.value
    switch (evt.target.id) {
      case 'width':
        setWidth(val)
        break
      case 'height':
        setHeight(val)
        break
      case 'margin':
        setMargin(val)
        break
      case 'tpi':
        setTPI(val)
        break
      case 'fabric':
        setFabric(val)
        break
      default:
        break
    }

  }

  const handleCreate = () => {
    const details = {
      width,
      height,
      margin,
      tpi,
      fabric
    }
    props.setDetails(details)
    handleClose()
  }

  return (
    <Grid
      id='home-page'
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Button
        size='large'
        variant='contained'
        className='btn'
        onClick={handleClickOpen}
      >
        GET STARTED
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Create Project</DialogTitle>
        <DialogContent onChange={event => handleChange(event)}>
          <DialogContentText>Tell us about your project!</DialogContentText>
          <TextField
            autoFocus
            margin='normal'
            style={{ marginRight: 15 }}
            id='width'
            label='width'
            type='number'
            value={width}
            InputProps={{
              min: '.25',
              max: '50',
              step: '.25',
              endAdornment: <InputAdornment position='end'>in</InputAdornment>
            }}
          />
          <TextField
            autoFocus
            margin='normal'
            style={{ marginLeft: 15 }}
            id='height'
            value={height}
            label='height'
            type='number'
            InputProps={{
              min: '.25',
              max: '50',
              step: '.25',
              endAdornment: <InputAdornment position='end'>in</InputAdornment>
            }}
          />
          <TextField
            autoFocus
            margin='normal'
            id='margin'
            value={margin}
            label='borders'
            type='number'
            style={{ marginRight: 15 }}
            InputProps={{
              min: '.25',
              max: '50',
              step: '.25',
              endAdornment: <InputAdornment position='end'>in</InputAdornment>
            }}
          />
          <TextField
            autoFocus
            margin='normal'
            id='tpi'
            vallue={tpi}
            label='fabric threads per inch'
            type='number'
            style={{ marginLeft: 15 }}
            InputProps={{
              min: '1',
              max: '50',
              step: '1',
              endAdornment: <InputAdornment position='end'>in</InputAdornment>
            }}
          />
          <TextField
            id='fabric'
            select
            label='Fabric Type'
            value={fabric}
            margin='normal'
            onSelectCapture={handleChange}
            helperText='Please select your fabric type'
          >
            {fabricTypes.map((option, indx) => (
              <MenuItem key={indx} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Link to='/project'>
            <Button onClick={handleCreate} color='primary'>
              Create
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => {
  return { setDetails: details => dispatch(setProjectDetails(details)) }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
