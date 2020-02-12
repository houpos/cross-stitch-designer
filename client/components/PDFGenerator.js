import axios from 'axios'
import React from 'react'
import { Grid } from '@material-ui/core'

export function savePDF(details) {
  return apiCall(details) // API call
    .then(response => {
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `your-file-name.pdf`
      link.click()
    })
    .catch(err => console.error(err))
}

function apiCall(details) {
  return axios.post(`http://localhost:8080/api/pdf`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/json'
    },
    details: JSON.stringify(details),
  })
}

const PDFGenerator = props => {
  return (
    <Grid container spacing={2}>
      <h1>Hi</h1>
    </Grid>
  )
}

export default PDFGenerator

