import React from 'react'
import { Toolbar, Typography, AppBar } from '@material-ui/core'
import ProjectActions from './ProjectActions'

const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          Cross Stitch Designer
        </Typography>
        <ProjectActions />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
