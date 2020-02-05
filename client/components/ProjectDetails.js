import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const ProjectDetails = props => {
  const allColors = props.details.allColors
  const colorCount = props.details.colorCount

  return (
    <div id='project-details'>
      <TableContainer size='small'>
        <Table aria-label='caption table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <h4>Project Details</h4>
              </TableCell>
              <TableCell align='right'>(in)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                Width
              </TableCell>
              <TableCell align='right'>{props.details.width}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Height
              </TableCell>
              <TableCell align='right'>{props.details.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                TPI
              </TableCell>
              <TableCell align='right'>{props.details.tpi}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label='caption table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <h4>Colors Used</h4>
              </TableCell>
              <TableCell align='right'>(skeins)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {(allColors || []).map(color => {
                  return (
                    <TableRow key={color.DMC}>
                      <TableCell component='th' scope='row'>
                        <FiberManualRecordIcon
                          fontSize='large'
                          style={{ color: color.RGB }}
                        />

                        {color.Name}
                      </TableCell>
                      <TableCell align='right'>{colorCount[color.RGB]}</TableCell>
                    </TableRow>
                  )
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProjectDetails
