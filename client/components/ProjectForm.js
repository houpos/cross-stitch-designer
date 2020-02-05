import React, { useState } from 'react'
import {
  Button,
  TextField,
  MenuItem,
  InputAdornment
} from '@material-ui/core'
import { connect } from 'react-redux'
import { setProjectDetails } from '../store'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const fabricTypes = ['Aida', 'Linen', 'Evenweave', 'Belfast']

const ProjectForm = props => {
    const [open, setOpen] = useState(true)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [margin, setMargin] = useState(0)
    const [tpi, setTPI] = useState(14)
    const [strands, setStrands] = useState(2)
    const [fabric, setFabric] = useState('Aida')

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const handleChange = evt => {
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
        case 'strands':
          setStrands(val)
          break
        default:
          break
      }
    }

    const makeGrid = () => {
    // const borderHorizontal = this.projectInfo.margin * this.projectInfo.tpi
    // const borderVertical = this.projectInfo.margin * this.projectInfo.tpi
    const tempWidth = width * tpi
    const tempHeight = height * tpi
    const newRow = Array(tempWidth).fill('#FFFFFF')
    let grid = []
    for (let x = 1; x <= tempHeight; x++) {
      grid.push([...newRow])
    }
    return grid
  }

    const handleCreate = () => {
      const details = {
        width,
        height,
        margin,
        tpi,
        fabric,
        color: {},
        allColors: [],
        colorCount: {},
        grid: makeGrid()
      }
      props.setDetails(details)
      handleClose()
    }

  return (
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
          style={{ marginLeft: 15 }}
          id='strands'
          value={strands}
          label='strands'
          type='number'
          InputProps={{
            min: '1',
            max: '6',
            step: '1'
          }}
        />
        <TextField
          autoFocus
          margin='normal'
          id='tpi'
          vallue={tpi}
          label='fabric threads per inch'
          type='number'
          style={{ marginRight: 15 }}
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
          style={{ marginLeft: 15 }}
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
          <Button onClick={handleCreate} color='primary'>
            Create
          </Button>
      </DialogActions>
    </Dialog>
  )
}


const mapDispatchToProps = dispatch => {
  return { setDetails: details => dispatch(setProjectDetails(details)) }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
