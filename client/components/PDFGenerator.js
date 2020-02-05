import axios from 'axios'
import React from 'react'
import { Grid, Button } from '@material-ui/core'

  const generateColorHTML = (allColors, colorCount) => {
    let html = `<ul>`
    allColors.forEach(color => {
      html += `<li>${color.Name} | ${color.DMC} </li>`
    })
    html += `</ul>`
    return html
  }

  const generateDetails = ({width, height, margin, tpi, fabric}) => {
    let html = `<div id="project-details">
    <ul>
      <li>${width} | ${height} | ${margin} | ${tpi} | ${fabric}</li></ul></div>`
    return html
  }

function generatePDF(details, grid, colors) {
  console.log('details', grid)
  let newGrid = `<div id="grid"><div class="row"><div class="cell" style="background-color: rgb(148, 91, 128);"></div></div></div>`
  return axios.get(`http://localhost:8080/api/pdf`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf'
    },
    params: {
      details,
      grid: newGrid,
      colors
    }
  })
}

export function savePDF(details) {
  const grid = document.getElementById('grid')

  return generatePDF(generateDetails(details), grid, generateColorHTML(details.allColors, details.colorCount)) // API call
    .then(response => {
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `your-file-name.pdf`
      link.click()
    })
    .catch(err => console.error(err))
}

const PDFGenerator = props => {
  return (
    <Grid container spacing={2}>
      <h1>Hi</h1>
    </Grid>
  )
}

export default PDFGenerator

