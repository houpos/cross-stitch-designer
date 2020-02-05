import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { changedColor } from '../store'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'auto',
    height: '500px',
    border: '0.5pt solid darkgray'
  },
  gridItem: {
    margin: '.5rem'
  },
  selected: {
    border: '2pt solid gray'
  }
}))

const ProjectColors = props => {
  const classes = useStyles()

  const handleColorChange = (color) => {
    props.changeColor(color)
  }

  return (
    <div>
      <h3>Colors</h3>
      <div className={classes.root}>
        <Grid container id='project-colors'>
          {dmc.map(color => {
            return (
              <Grid
                item
                key={color.DMC}
                className={classes.gridItem}
                xs={2}
                onClick={() => handleColorChange(color, event)}
              >
                <Paper
                  style={{
                    backgroundColor: color.RGB,
                    width: '2rem',
                    height: '2rem'
                  }}
                  variant='outlined'
                  square
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return { changeColor: color => dispatch(changedColor(color)) }
}

const mapStateToProps = state => {
  return { color: state.color }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectColors)

const dmc = [
  {
    DMC: 0,
    Name: 'blanc White',
    Red: 255,
    Green: 255,
    Blue: 255,
    RGB: '#FFFFFF'
  },
  {
    DMC: 208,
    Name: 'Lavender-VY DK',
    Red: 148,
    Green: 91,
    Blue: 128,
    RGB: '#945B80'
  },
  {
    DMC: 209,
    Name: 'Lavender-DK',
    Red: 206,
    Green: 148,
    Blue: 186,
    RGB: '#CE94BA'
  },
  {
    DMC: 210,
    Name: 'Lavender-MD',
    Red: 236,
    Green: 207,
    Blue: 225,
    RGB: '#ECCFE1'
  },
  {
    DMC: 211,
    Name: 'Lavender-LT',
    Red: 243,
    Green: 218,
    Blue: 228,
    RGB: '#F3DAE4'
  },
  {
    DMC: 221,
    Name: 'Shell Pink-VY DK',
    Red: 156,
    Green: 41,
    Blue: 74,
    RGB: '#9C294A'
  },
  {
    DMC: 223,
    Name: 'Shell Pink-LT',
    Red: 219,
    Green: 128,
    Blue: 115,
    RGB: '#DB8073'
  },
  {
    DMC: 224,
    Name: 'Shell Pink-VY LT',
    Red: 255,
    Green: 199,
    Blue: 176,
    RGB: '#FFC7B0'
  },
  {
    DMC: 225,
    Name: 'Shell Pink-ULT VY L',
    Red: 255,
    Green: 240,
    Blue: 228,
    RGB: '#FFF0E4'
  },
  {
    DMC: 300,
    Name: 'Mahogany-VY DK',
    Red: 143,
    Green: 57,
    Blue: 38,
    RGB: '#8F3926'
  },
  {
    DMC: 301,
    Name: 'Mahogany-MD',
    Red: 209,
    Green: 102,
    Blue: 84,
    RGB: '#D16654'
  },
  {
    DMC: 304,
    Name: 'Christmas Red-MD',
    Red: 188,
    Green: 0,
    Blue: 97,
    RGB: '#BC0061'
  },
  {
    DMC: 307,
    Name: 'Lemon',
    Red: 255,
    Green: 231,
    Blue: 109,
    RGB: '#FFE76D'
  },
  {
    DMC: 309,
    Name: 'Rose-DP',
    Red: 214,
    Green: 43,
    Blue: 91,
    RGB: '#D62B5B'
  },
  {
    DMC: 310,
    Name: 'Black',
    Red: 0,
    Green: 0,
    Blue: 0,
    RGB: 0
  },
  {
    DMC: 311,
    Name: 'Navy Blue-MD',
    Red: 0,
    Green: 79,
    Blue: 97,
    RGB: '#004F61'
  },
  {
    DMC: 312,
    Name: 'Navy Blue-LT',
    Red: 58,
    Green: 84,
    Blue: 103,
    RGB: '#3A5467'
  },
  {
    DMC: 315,
    Name: 'Antique Mauve-VY DK',
    Red: 163,
    Green: 90,
    Blue: 91,
    RGB: '#A35A5B'
  },
  {
    DMC: 316,
    Name: 'Antique Mauve-MD',
    Red: 220,
    Green: 141,
    Blue: 141,
    RGB: '#DC8D8D'
  },
  {
    DMC: 317,
    Name: 'Pewter Grey',
    Red: 167,
    Green: 139,
    Blue: 136,
    RGB: '#A78B88'
  },
  {
    DMC: 318,
    Name: 'Steel Grey - LT',
    Red: 197,
    Green: 198,
    Blue: 190,
    RGB: '#C5C6BE'
  },
  {
    DMC: 319,
    Name: 'Pistachio Grn-VY DK',
    Red: 85,
    Green: 95,
    Blue: 82,
    RGB: '#555F52'
  },
  {
    DMC: 320,
    Name: 'Pistachio Green-MD',
    Red: 138,
    Green: 153,
    Blue: 120,
    RGB: '#8A9978'
  },
  {
    DMC: 321,
    Name: 'Christmas Red',
    Red: 231,
    Green: 18,
    Blue: 97,
    RGB: '#E71261'
  },
  {
    DMC: 322,
    Name: 'Navy Blue-VY LT',
    Red: 81,
    Green: 109,
    Blue: 135,
    RGB: '#516D87'
  },
  {
    DMC: 326,
    Name: 'Rose-VY DP',
    Red: 188,
    Green: 22,
    Blue: 65,
    RGB: '#BC1641'
  },
  {
    DMC: 327,
    Name: 'Violet-DK',
    Red: 61,
    Green: 0,
    Blue: 103,
    RGB: '#3D0067'
  },
  {
    DMC: 333,
    Name: 'Blue Violet-VY DK',
    Red: 127,
    Green: 84,
    Blue: 130,
    RGB: '#7F5482'
  },
  {
    DMC: 334,
    Name: 'Baby Blue-MD',
    Red: 115,
    Green: 140,
    Blue: 170,
    RGB: '#738CAA'
  },
  {
    DMC: 335,
    Name: 'Rose',
    Red: 219,
    Green: 36,
    Blue: 79,
    RGB: '#DB244F'
  },
  {
    DMC: 336,
    Name: 'Navy Blue',
    Red: 36,
    Green: 73,
    Blue: 103,
    RGB: 244967
  },
  {
    DMC: 340,
    Name: 'Blue Violet-MD',
    Red: 162,
    Green: 121,
    Blue: 164,
    RGB: '#A279A4'
  },
  {
    DMC: 341,
    Name: 'Blue Violet-LT',
    Red: 145,
    Green: 180,
    Blue: 197,
    RGB: '#91B4C5'
  },
  {
    DMC: 347,
    Name: 'Salmon-VY DK',
    Red: 194,
    Green: 36,
    Blue: 67,
    RGB: '#C22443'
  },
  {
    DMC: 349,
    Name: 'Coral-DK',
    Red: 220,
    Green: 61,
    Blue: 91,
    RGB: '#DC3D5B'
  },
  {
    DMC: 350,
    Name: 'Coral-MD',
    Red: 237,
    Green: 69,
    Blue: 90,
    RGB: '#ED455A'
  },
  {
    DMC: 351,
    Name: 'Coral',
    Red: 255,
    Green: 128,
    Blue: 135,
    RGB: '#FF8087'
  },
  {
    DMC: 352,
    Name: 'Coral-LT',
    Red: 255,
    Green: 157,
    Blue: 144,
    RGB: '#FF9D90'
  },
  {
    DMC: 353,
    Name: 'Peach Flesh',
    Red: 255,
    Green: 196,
    Blue: 184,
    RGB: '#FFC4B8'
  },
  {
    DMC: 355,
    Name: 'Terra Cotta-DK',
    Red: 189,
    Green: 73,
    Blue: 47,
    RGB: '#BD492F'
  },
  {
    DMC: 356,
    Name: 'Terra Cotta-MD',
    Red: 226,
    Green: 114,
    Blue: 91,
    RGB: '#E2725B'
  },
  {
    DMC: 367,
    Name: 'Pistachio Green-DK',
    Red: 95,
    Green: 112,
    Blue: 91,
    RGB: '#5F705B'
  },
  {
    DMC: 368,
    Name: 'Pistachio Green-LT',
    Red: 181,
    Green: 206,
    Blue: 162,
    RGB: '#B5CEA2'
  },
  {
    DMC: 369,
    Name: 'Pistachio Grn-VY LT',
    Red: 243,
    Green: 250,
    Blue: 209,
    RGB: '#F3FAD1'
  },
  {
    DMC: 370,
    Name: 'Mustard - MD',
    Red: 184,
    Green: 138,
    Blue: 87,
    RGB: '#B88A57'
  },
  {
    DMC: 371,
    Name: 'Mustard',
    Red: 196,
    Green: 155,
    Blue: 100,
    RGB: '#C49B64'
  },
  {
    DMC: 372,
    Name: 'Mustard - LT',
    Red: 203,
    Green: 162,
    Blue: 107,
    RGB: '#CBA26B'
  },
  {
    DMC: 400,
    Name: 'Mahogany-DK',
    Red: 157,
    Green: 60,
    Blue: 39,
    RGB: '#9D3C27'
  },
  {
    DMC: 402,
    Name: 'Mahogany-VY LT',
    Red: 255,
    Green: 190,
    Blue: 164,
    RGB: '#FFBEA4'
  },
  {
    DMC: 407,
    Name: 'Sportsman Flsh-VY D',
    Red: 194,
    Green: 101,
    Blue: 76,
    RGB: '#C2654C'
  },
  {
    DMC: 413,
    Name: 'Pewter Grey - DK',
    Red: 109,
    Green: 95,
    Blue: 95,
    RGB: '#6D5F5F'
  },
  {
    DMC: 414,
    Name: 'Steel Grey - DK',
    Red: 167,
    Green: 139,
    Blue: 136,
    RGB: '#A78B88'
  },
  {
    DMC: 415,
    Name: 'Pearl Grey',
    Red: 221,
    Green: 221,
    Blue: 218,
    RGB: '#DDDDDA'
  },
  {
    DMC: 420,
    Name: 'Hazel Nut Brown-DK',
    Red: 140,
    Green: 91,
    Blue: 43,
    RGB: '#8C5B2B'
  },
  {
    DMC: 422,
    Name: 'Hazel Nut Brown-LT',
    Red: 237,
    Green: 172,
    Blue: 123,
    RGB: '#EDAC7B'
  },
  {
    DMC: 433,
    Name: 'Brown-MD',
    Red: 151,
    Green: 84,
    Blue: 20,
    RGB: 975414
  },
  {
    DMC: 434,
    Name: 'Brown-LT',
    Red: 178,
    Green: 103,
    Blue: 70,
    RGB: '#B26746'
  },
  {
    DMC: 435,
    Name: 'Brown-VY LT',
    Red: 187,
    Green: 107,
    Blue: 57,
    RGB: '#BB6B39'
  },
  {
    DMC: 436,
    Name: 'Tan',
    Red: 231,
    Green: 152,
    Blue: 115,
    RGB: '#E79873'
  },
  {
    DMC: 437,
    Name: 'Tan-LT',
    Red: 238,
    Green: 171,
    Blue: 121,
    RGB: '#EEAB79'
  },
  {
    DMC: 444,
    Name: 'Lemon-DK',
    Red: 255,
    Green: 176,
    Blue: 0,
    RGB: '#FFB000'
  },
  {
    DMC: 445,
    Name: 'Lemon-LT',
    Red: 255,
    Green: 255,
    Blue: 190,
    RGB: '#FFFFBE'
  },
  {
    DMC: 451,
    Name: 'Shell Grey - DK',
    Red: 179,
    Green: 151,
    Blue: 143,
    RGB: '#B3978F'
  },
  {
    DMC: 452,
    Name: 'Shell Grey - MD',
    Red: 210,
    Green: 185,
    Blue: 175,
    RGB: '#D2B9AF'
  },
  {
    DMC: 453,
    Name: 'Shell Grey - LT',
    Red: 235,
    Green: 207,
    Blue: 185,
    RGB: '#EBCFB9'
  },
  {
    DMC: 469,
    Name: 'Avocado Green',
    Red: 116,
    Green: 114,
    Blue: 92,
    RGB: '#74725C'
  },
  {
    DMC: 470,
    Name: 'Avocado Green-LT',
    Red: 133,
    Green: 143,
    Blue: 108,
    RGB: '#858F6C'
  },
  {
    DMC: 471,
    Name: 'Avocado Green-VY LT',
    Red: 176,
    Green: 187,
    Blue: 140,
    RGB: '#B0BB8C'
  },
  {
    DMC: 472,
    Name: 'Avocado Green-ULT L',
    Red: 238,
    Green: 255,
    Blue: 182,
    RGB: '#EEFFB6'
  },
  {
    DMC: 498,
    Name: 'Christmas Red-LT',
    Red: 187,
    Green: 0,
    Blue: 97,
    RGB: '#BB0061'
  },
  {
    DMC: 500,
    Name: 'Blue Green-VY DK',
    Red: 43,
    Green: 57,
    Blue: 41,
    RGB: '#2B3929'
  },
  {
    DMC: 501,
    Name: 'Blue Green-DK',
    Red: 67,
    Green: 85,
    Blue: 73,
    RGB: 435549
  },
  {
    DMC: 502,
    Name: 'Blue Green',
    Red: 134,
    Green: 158,
    Blue: 134,
    RGB: 8.69e88
  },
  {
    DMC: 503,
    Name: 'Blue Green-MD',
    Red: 195,
    Green: 206,
    Blue: 183,
    RGB: '#C3CEB7'
  },
  {
    DMC: 504,
    Name: 'Blue Green-LT',
    Red: 206,
    Green: 221,
    Blue: 193,
    RGB: '#CEDDC1'
  },
  {
    DMC: 517,
    Name: 'Wedgewood-MD',
    Red: 16,
    Green: 127,
    Blue: 135,
    RGB: '#107F87'
  },
  {
    DMC: 518,
    Name: 'Wedgewood-LT',
    Red: 102,
    Green: 148,
    Blue: 154,
    RGB: '#66949A'
  },
  {
    DMC: 519,
    Name: 'Sky Blue',
    Red: 194,
    Green: 209,
    Blue: 207,
    RGB: '#C2D1CF'
  },
  {
    DMC: 520,
    Name: 'Fern Green-DK',
    Red: 55,
    Green: 73,
    Blue: 18,
    RGB: 374912
  },
  {
    DMC: 522,
    Name: 'Fern Green',
    Red: 159,
    Green: 169,
    Blue: 142,
    RGB: '#9FA98E'
  },
  {
    DMC: 523,
    Name: 'Fern Green-LT',
    Red: 172,
    Green: 183,
    Blue: 142,
    RGB: '#ACB78E'
  },
  {
    DMC: 524,
    Name: 'Fern Green-VY LT',
    Red: 205,
    Green: 182,
    Blue: 158,
    RGB: '#CDB69E'
  },
  {
    DMC: 535,
    Name: 'Ash Grey - VY LT',
    Red: 85,
    Green: 85,
    Blue: 89,
    RGB: 555559
  },
  {
    DMC: 543,
    Name: 'Beige Brown-UL VY L',
    Red: 239,
    Green: 214,
    Blue: 188,
    RGB: '#EFD6BC'
  },
  {
    DMC: 550,
    Name: 'Violet-VY LT',
    Red: 109,
    Green: 18,
    Blue: 97,
    RGB: '#6D1261'
  },
  {
    DMC: 552,
    Name: 'Violet-MD',
    Red: 146,
    Green: 85,
    Blue: 130,
    RGB: 925582
  },
  {
    DMC: 553,
    Name: 'Violet',
    Red: 160,
    Green: 100,
    Blue: 146,
    RGB: '#A06492'
  },
  {
    DMC: 554,
    Name: 'Violet-LT',
    Red: 243,
    Green: 206,
    Blue: 225,
    RGB: '#F3CEE1'
  },
  {
    DMC: 561,
    Name: 'Jade-VY DK',
    Red: 59,
    Green: 96,
    Blue: 76,
    RGB: '#3B604C'
  },
  {
    DMC: 562,
    Name: 'Jade-MD',
    Red: 97,
    Green: 134,
    Blue: 97,
    RGB: 618661
  },
  {
    DMC: 563,
    Name: 'Jade-LT',
    Red: 182,
    Green: 212,
    Blue: 180,
    RGB: '#B6D4B4'
  },
  {
    DMC: 564,
    Name: 'Jade-VY LT',
    Red: 214,
    Green: 230,
    Blue: 204,
    RGB: '#D6E6CC'
  },
  {
    DMC: 580,
    Name: 'Moss Green-DK',
    Red: 0,
    Green: 103,
    Blue: 0,
    RGB: 6700
  },
  {
    DMC: 581,
    Name: 'Moss Green',
    Red: 151,
    Green: 152,
    Blue: 49,
    RGB: 979831
  },
  {
    DMC: 597,
    Name: 'Turquoise',
    Red: 128,
    Green: 151,
    Blue: 132,
    RGB: 809784
  },
  {
    DMC: 598,
    Name: 'Turquoise-LT',
    Red: 208,
    Green: 223,
    Blue: 205,
    RGB: '#D0DFCD'
  },
  {
    DMC: 600,
    Name: 'Cranberry-VY DK',
    Red: 208,
    Green: 57,
    Blue: 106,
    RGB: '#D0396A'
  },
  {
    DMC: 601,
    Name: 'Cranberry-DK',
    Red: 222,
    Green: 57,
    Blue: 105,
    RGB: '#DE3969'
  },
  {
    DMC: 602,
    Name: 'Cranberry-MD',
    Red: 231,
    Green: 84,
    Blue: 122,
    RGB: '#E7547A'
  },
  {
    DMC: 603,
    Name: 'Cranberry',
    Red: 255,
    Green: 115,
    Blue: 140,
    RGB: '#FF738C'
  },
  {
    DMC: 604,
    Name: 'Cranberry-LT',
    Red: 255,
    Green: 189,
    Blue: 202,
    RGB: '#FFBDCA'
  },
  {
    DMC: 605,
    Name: 'Cranberry-VY LT',
    Red: 255,
    Green: 207,
    Blue: 214,
    RGB: '#FFCFD6'
  },
  {
    DMC: 606,
    Name: 'Bright Orange-Red',
    Red: 255,
    Green: 0,
    Blue: 0,
    RGB: '#FF0000'
  },
  {
    DMC: 608,
    Name: 'Bright Orange',
    Red: 255,
    Green: 91,
    Blue: 0,
    RGB: '#FF5B00'
  },
  {
    DMC: 610,
    Name: 'Drab Brown - VY DK',
    Red: 151,
    Green: 104,
    Blue: 84,
    RGB: 976854
  },
  {
    DMC: 611,
    Name: 'Drab Brown - DK',
    Red: 158,
    Green: 109,
    Blue: 91,
    RGB: '#9E6D5B'
  },
  {
    DMC: 612,
    Name: 'Drab Brown - MD',
    Red: 203,
    Green: 152,
    Blue: 103,
    RGB: '#CB9867'
  },
  {
    DMC: 613,
    Name: 'Drab Brown - LT',
    Red: 219,
    Green: 176,
    Blue: 122,
    RGB: '#DBB07A'
  },
  {
    DMC: 632,
    Name: 'Negro Flesh-MD',
    Red: 162,
    Green: 77,
    Blue: 52,
    RGB: '#A24D34'
  },
  {
    DMC: 640,
    Name: 'Beige Grey - VY DK',
    Red: 163,
    Green: 163,
    Blue: 157,
    RGB: '#A3A39D'
  },
  {
    DMC: 642,
    Name: 'Beige Grey - DK',
    Red: 174,
    Green: 176,
    Blue: 170,
    RGB: '#AEB0AA'
  },
  {
    DMC: 644,
    Name: 'Beige Grey-MD',
    Red: 224,
    Green: 224,
    Blue: 215,
    RGB: '#E0E0D7'
  },
  {
    DMC: 645,
    Name: 'Beaver Grey - VY DK',
    Red: 113,
    Green: 113,
    Blue: 113,
    RGB: 717171
  },
  {
    DMC: 646,
    Name: 'Beaver Grey-DK',
    Red: 121,
    Green: 121,
    Blue: 121,
    RGB: 797979
  },
  {
    DMC: 647,
    Name: 'Beaver Grey - MD',
    Red: 190,
    Green: 190,
    Blue: 185,
    RGB: '#BEBEB9'
  },
  {
    DMC: 648,
    Name: 'Beaver Grey-LT',
    Red: 202,
    Green: 202,
    Blue: 202,
    RGB: '#CACACA'
  },
  {
    DMC: 666,
    Name: 'Christmas Red-LT',
    Red: 213,
    Green: 39,
    Blue: 86,
    RGB: '#D52756'
  },
  {
    DMC: 676,
    Name: 'Old Gold-LT',
    Red: 255,
    Green: 206,
    Blue: 158,
    RGB: '#FFCE9E'
  },
  {
    DMC: 677,
    Name: 'Old Gold-VY LT',
    Red: 255,
    Green: 231,
    Blue: 182,
    RGB: '#FFE7B6'
  },
  {
    DMC: 680,
    Name: 'Old Gold-DK',
    Red: 209,
    Green: 140,
    Blue: 103,
    RGB: '#D18C67'
  },
  {
    DMC: 699,
    Name: 'Chirstmas Green',
    Red: 0,
    Green: 91,
    Blue: 6,
    RGB: '#005B06'
  },
  {
    DMC: 700,
    Name: 'Christmas Green-BRT',
    Red: 0,
    Green: 96,
    Blue: 47,
    RGB: '#00602F'
  },
  {
    DMC: 701,
    Name: 'Christmas Green-LT',
    Red: 79,
    Green: 108,
    Blue: 69,
    RGB: '#4F6C45'
  },
  {
    DMC: 702,
    Name: 'Kelly Green',
    Red: 79,
    Green: 121,
    Blue: 66,
    RGB: '#4F7942'
  },
  {
    DMC: 703,
    Name: 'Chartreuse',
    Red: 121,
    Green: 144,
    Blue: 76,
    RGB: '#79904C'
  },
  {
    DMC: 704,
    Name: 'Chartreuse-BRT',
    Red: 165,
    Green: 164,
    Blue: 103,
    RGB: '#A5A467'
  },
  {
    DMC: 712,
    Name: 'Cream',
    Red: 245,
    Green: 240,
    Blue: 219,
    RGB: '#F5F0DB'
  },
  {
    DMC: 718,
    Name: 'Plum',
    Red: 219,
    Green: 55,
    Blue: 121,
    RGB: '#DB3779'
  },
  {
    DMC: 720,
    Name: 'Orange Spice-DK',
    Red: 200,
    Green: 36,
    Blue: 43,
    RGB: '#C8242B'
  },
  {
    DMC: 721,
    Name: 'Orange Spice-MD',
    Red: 255,
    Green: 115,
    Blue: 97,
    RGB: '#FF7361'
  },
  {
    DMC: 722,
    Name: 'Orange Spice-LT',
    Red: 255,
    Green: 146,
    Blue: 109,
    RGB: '#FF926D'
  },
  {
    DMC: 725,
    Name: 'Topaz',
    Red: 255,
    Green: 200,
    Blue: 124,
    RGB: '#FFC87C'
  },
  {
    DMC: 726,
    Name: 'Topaz-LT',
    Red: 255,
    Green: 224,
    Blue: 128,
    RGB: '#FFE080'
  },
  {
    DMC: 727,
    Name: 'Topaz-VY LT',
    Red: 255,
    Green: 235,
    Blue: 168,
    RGB: '#FFEBA8'
  },
  {
    DMC: 729,
    Name: 'Old Gold-MD',
    Red: 243,
    Green: 176,
    Blue: 128,
    RGB: '#F3B080'
  },
  {
    DMC: 730,
    Name: 'Olive Green-VY DK',
    Red: 132,
    Green: 102,
    Blue: 0,
    RGB: 846600
  },
  {
    DMC: 731,
    Name: 'Olive Green-DK',
    Red: 140,
    Green: 103,
    Blue: 0,
    RGB: '#8C6700'
  },
  {
    DMC: 732,
    Name: 'Olive Green',
    Red: 145,
    Green: 104,
    Blue: 0,
    RGB: 916800
  },
  {
    DMC: 733,
    Name: 'Olive Green-MD',
    Red: 206,
    Green: 155,
    Blue: 97,
    RGB: '#CE9B61'
  },
  {
    DMC: 734,
    Name: 'Olive Green-LT',
    Red: 221,
    Green: 166,
    Blue: 107,
    RGB: '#DDA66B'
  },
  {
    DMC: 738,
    Name: 'Tan-VY LT',
    Red: 244,
    Green: 195,
    Blue: 139,
    RGB: '#F4C38B'
  },
  {
    DMC: 739,
    Name: 'Tan-ULT VY LT',
    Red: 244,
    Green: 233,
    Blue: 202,
    RGB: '#F4E9CA'
  },
  {
    DMC: 740,
    Name: 'Tangerine',
    Red: 255,
    Green: 131,
    Blue: 19,
    RGB: '#FF8313'
  },
  {
    DMC: 741,
    Name: 'Tangerine-MD',
    Red: 255,
    Green: 142,
    Blue: 4,
    RGB: '#FF8E04'
  },
  {
    DMC: 742,
    Name: 'Tangerine-LT',
    Red: 255,
    Green: 183,
    Blue: 85,
    RGB: '#FFB755'
  },
  {
    DMC: 743,
    Name: 'Yellow-MD',
    Red: 255,
    Green: 230,
    Blue: 146,
    RGB: '#FFE692'
  },
  {
    DMC: 744,
    Name: 'Yellow-PALE',
    Red: 255,
    Green: 239,
    Blue: 170,
    RGB: '#FFEFAA'
  },
  {
    DMC: 745,
    Name: 'Yellow-LT PALE',
    Red: 255,
    Green: 240,
    Blue: 197,
    RGB: '#FFF0C5'
  },
  {
    DMC: 746,
    Name: 'Off White',
    Red: 246,
    Green: 234,
    Blue: 219,
    RGB: '#F6EADB'
  },
  {
    DMC: 747,
    Name: 'Sky Blue-VY LT',
    Red: 240,
    Green: 247,
    Blue: 239,
    RGB: '#F0F7EF'
  },
  {
    DMC: 754,
    Name: 'Peach Flesh-LT',
    Red: 251,
    Green: 227,
    Blue: 209,
    RGB: '#FBE3D1'
  },
  {
    DMC: 758,
    Name: 'Terra Cotta-VY LT',
    Red: 255,
    Green: 177,
    Blue: 147,
    RGB: '#FFB193'
  },
  {
    DMC: 760,
    Name: 'Salmon',
    Red: 249,
    Green: 160,
    Blue: 146,
    RGB: '#F9A092'
  },
  {
    DMC: 761,
    Name: 'Salmon-LT',
    Red: 255,
    Green: 201,
    Blue: 188,
    RGB: '#FFC9BC'
  },
  {
    DMC: 762,
    Name: 'Pearl Grey - VY LT',
    Red: 232,
    Green: 232,
    Blue: 229,
    RGB: '#E8E8E5'
  },
  {
    DMC: 772,
    Name: 'Pine Green--LT',
    Red: 231,
    Green: 249,
    Blue: 203,
    RGB: '#E7F9CB'
  },
  {
    DMC: 775,
    Name: 'Baby Blue-VY LT',
    Red: 247,
    Green: 246,
    Blue: 248,
    RGB: '#F7F6F8'
  },
  {
    DMC: 776,
    Name: 'Pink-MD',
    Red: 255,
    Green: 177,
    Blue: 174,
    RGB: '#FFB1AE'
  },
  {
    DMC: 778,
    Name: 'Antique Mauve-VY LT',
    Red: 255,
    Green: 199,
    Blue: 184,
    RGB: '#FFC7B8'
  },
  {
    DMC: 780,
    Name: 'Topaz-ULT VY DK',
    Red: 181,
    Green: 98,
    Blue: 46,
    RGB: '#B5622E'
  },
  {
    DMC: 781,
    Name: 'Topaz-VY DK',
    Red: 181,
    Green: 107,
    Blue: 56,
    RGB: '#B56B38'
  },
  {
    DMC: 782,
    Name: 'Topaz-DK',
    Red: 204,
    Green: 119,
    Blue: 66,
    RGB: '#CC7742'
  },
  {
    DMC: 783,
    Name: 'Topaz-MD',
    Red: 225,
    Green: 146,
    Blue: 85,
    RGB: '#E19255'
  },
  {
    DMC: 791,
    Name: 'Cornflower Blue-VYD',
    Red: 71,
    Green: 55,
    Blue: 93,
    RGB: '#47375D'
  },
  {
    DMC: 792,
    Name: 'Cornflower Blue-DK',
    Red: 97,
    Green: 97,
    Blue: 128,
    RGB: 616180
  },
  {
    DMC: 793,
    Name: 'Cornflower Blue-MD',
    Red: 147,
    Green: 139,
    Blue: 164,
    RGB: '#938BA4'
  },
  {
    DMC: 794,
    Name: 'Cornflower Blue-LT',
    Red: 187,
    Green: 208,
    Blue: 218,
    RGB: '#BBD0DA'
  },
  {
    DMC: 796,
    Name: 'Royal Blue-DK',
    Red: 30,
    Green: 58,
    Blue: 95,
    RGB: '#1E3A5F'
  },
  {
    DMC: 797,
    Name: 'Royal Blue',
    Red: 30,
    Green: 66,
    Blue: 99,
    RGB: '#∞E+00'
  },
  {
    DMC: 798,
    Name: 'Delft-DK',
    Red: 103,
    Green: 115,
    Blue: 141,
    RGB: '#67738D'
  },
  {
    DMC: 799,
    Name: 'Delft-MD',
    Red: 132,
    Green: 156,
    Blue: 182,
    RGB: '#849CB6'
  },
  {
    DMC: 800,
    Name: 'Delft-PALE',
    Red: 233,
    Green: 238,
    Blue: 233,
    RGB: '#E9EEE9'
  },
  {
    DMC: 801,
    Name: 'Coffee Brown-DK',
    Red: 123,
    Green: 71,
    Blue: 20,
    RGB: '#7B4714'
  },
  {
    DMC: 806,
    Name: 'Peacock Blue-DK',
    Red: 30,
    Green: 130,
    Blue: 133,
    RGB: '#∞E+00'
  },
  {
    DMC: 807,
    Name: 'Peacock Blue',
    Red: 128,
    Green: 167,
    Blue: 160,
    RGB: '#80A7A0'
  },
  {
    DMC: 809,
    Name: 'Delft',
    Red: 190,
    Green: 193,
    Blue: 205,
    RGB: '#BEC1CD'
  },
  {
    DMC: 813,
    Name: 'Blue-LT',
    Red: 175,
    Green: 195,
    Blue: 205,
    RGB: '#AFC3CD'
  },
  {
    DMC: 814,
    Name: 'Garnet-DK',
    Red: 162,
    Green: 0,
    Blue: 88,
    RGB: '#A20058'
  },
  {
    DMC: 815,
    Name: 'Garnet-MD',
    Red: 166,
    Green: 0,
    Blue: 91,
    RGB: '#A6005B'
  },
  {
    DMC: 816,
    Name: 'Garnet',
    Red: 179,
    Green: 0,
    Blue: 91,
    RGB: '#B3005B'
  },
  {
    DMC: 817,
    Name: 'Coral Red-VY DK',
    Red: 219,
    Green: 24,
    Blue: 85,
    RGB: '#DB1855'
  },
  {
    DMC: 818,
    Name: 'Baby Pink',
    Red: 255,
    Green: 234,
    Blue: 235,
    RGB: '#FFEAEB'
  },
  {
    DMC: 819,
    Name: 'Baby Pink-LT',
    Red: 248,
    Green: 247,
    Blue: 221,
    RGB: '#F8F7DD'
  },
  {
    DMC: 820,
    Name: 'Royal Blue-VY DK',
    Red: 30,
    Green: 54,
    Blue: 85,
    RGB: '#∞E+00'
  },
  {
    DMC: 822,
    Name: 'Beige Grey-LT',
    Red: 242,
    Green: 234,
    Blue: 219,
    RGB: '#F2EADB'
  },
  {
    DMC: 823,
    Name: 'Navy Blue-DK',
    Red: 0,
    Green: 0,
    Blue: 73,
    RGB: 49
  },
  {
    DMC: 824,
    Name: 'Blue-VY DK',
    Red: 71,
    Green: 97,
    Blue: 116,
    RGB: 476174
  },
  {
    DMC: 825,
    Name: 'Blue-DK',
    Red: 85,
    Green: 108,
    Blue: 128,
    RGB: '#556C80'
  },
  {
    DMC: 826,
    Name: 'Blue-MD',
    Red: 115,
    Green: 138,
    Blue: 153,
    RGB: '#738A99'
  },
  {
    DMC: 827,
    Name: 'Blue-VY LT',
    Red: 213,
    Green: 231,
    Blue: 232,
    RGB: '#D5E7E8'
  },
  {
    DMC: 828,
    Name: 'Blue-ULT VY LT',
    Red: 237,
    Green: 247,
    Blue: 238,
    RGB: '#EDF7EE'
  },
  {
    DMC: 829,
    Name: 'Golden Olive-VY DK',
    Red: 130,
    Green: 90,
    Blue: 8,
    RGB: '#825A08'
  },
  {
    DMC: 830,
    Name: 'Golden Olive-DK',
    Red: 136,
    Green: 95,
    Blue: 18,
    RGB: '#885F12'
  },
  {
    DMC: 831,
    Name: 'Golden Olive-MD',
    Red: 144,
    Green: 103,
    Blue: 18,
    RGB: 906712
  },
  {
    DMC: 832,
    Name: 'Golden Olive',
    Red: 178,
    Green: 119,
    Blue: 55,
    RGB: '#B27737'
  },
  {
    DMC: 833,
    Name: 'Golden Olive-LT',
    Red: 219,
    Green: 182,
    Blue: 128,
    RGB: '#DBB680'
  },
  {
    DMC: 834,
    Name: 'Golden Olive-VY LT',
    Red: 242,
    Green: 209,
    Blue: 142,
    RGB: '#F2D18E'
  },
  {
    DMC: 838,
    Name: 'Beige Brown-VY DK',
    Red: 94,
    Green: 56,
    Blue: 27,
    RGB: '#5E381B'
  },
  {
    DMC: 839,
    Name: 'Beige Brown-DK',
    Red: 109,
    Green: 66,
    Blue: 39,
    RGB: '#6D4227'
  },
  {
    DMC: 840,
    Name: 'Beige Brown-MD',
    Red: 128,
    Green: 85,
    Blue: 30,
    RGB: '#80551E'
  },
  {
    DMC: 841,
    Name: 'Beige Brown-LT',
    Red: 188,
    Green: 134,
    Blue: 107,
    RGB: '#BC866B'
  },
  {
    DMC: 842,
    Name: 'Beige Brown-VY LT',
    Red: 219,
    Green: 194,
    Blue: 164,
    RGB: '#DBC2A4'
  },
  {
    DMC: 844,
    Name: 'Beaver Brown -ULT D',
    Red: 107,
    Green: 103,
    Blue: 102,
    RGB: '#6B6766'
  },
  {
    DMC: 868,
    Name: 'Hazel Nut Brown-VYD',
    Red: 153,
    Green: 92,
    Blue: 48,
    RGB: '#995C30'
  },
  {
    DMC: 869,
    Name: 'Hazel Nut Brn-VY DK',
    Red: 153,
    Green: 92,
    Blue: 48,
    RGB: '#995C30'
  },
  {
    DMC: 890,
    Name: 'Pistachio Grn-ULT D',
    Red: 79,
    Green: 86,
    Blue: 76,
    RGB: '#4F564C'
  },
  {
    DMC: 891,
    Name: 'Carnation-DK',
    Red: 241,
    Green: 49,
    Blue: 84,
    RGB: '#F13154'
  },
  {
    DMC: 892,
    Name: 'Carnation-MD',
    Red: 249,
    Green: 90,
    Blue: 97,
    RGB: '#F95A61'
  },
  {
    DMC: 893,
    Name: 'Carnation-LT',
    Red: 243,
    Green: 149,
    Blue: 157,
    RGB: '#F3959D'
  },
  {
    DMC: 894,
    Name: 'Carnation-VY LT',
    Red: 255,
    Green: 194,
    Blue: 191,
    RGB: '#FFC2BF'
  },
  {
    DMC: 895,
    Name: 'Hunter Green-VY DK',
    Red: 89,
    Green: 92,
    Blue: 78,
    RGB: '#595C4E'
  },
  {
    DMC: 898,
    Name: 'Coffee Brown-VY DK',
    Red: 118,
    Green: 55,
    Blue: 19,
    RGB: 763713
  },
  {
    DMC: 899,
    Name: 'Rose-MD',
    Red: 233,
    Green: 109,
    Blue: 115,
    RGB: '#E96D73'
  },
  {
    DMC: 900,
    Name: 'Burnt Orange-DK',
    Red: 206,
    Green: 43,
    Blue: 0,
    RGB: '#CE2B00'
  },
  {
    DMC: 902,
    Name: 'Granet-VY DK',
    Red: 138,
    Green: 24,
    Blue: 77,
    RGB: '#8A184D'
  },
  {
    DMC: 904,
    Name: 'Parrot Green-VY DK',
    Red: 78,
    Green: 95,
    Blue: 57,
    RGB: '#4E5F39'
  },
  {
    DMC: 905,
    Name: 'Parrot Green-DK',
    Red: 98,
    Green: 119,
    Blue: 57,
    RGB: 627739
  },
  {
    DMC: 906,
    Name: 'Parrot Green-MD',
    Red: 143,
    Green: 163,
    Blue: 89,
    RGB: '#8FA359'
  },
  {
    DMC: 907,
    Name: 'Parrot Green-LT',
    Red: 185,
    Green: 200,
    Blue: 102,
    RGB: '#B9C866'
  },
  {
    DMC: 909,
    Name: 'Emerald Green-VY DK',
    Red: 49,
    Green: 105,
    Blue: 85,
    RGB: 316955
  },
  {
    DMC: 910,
    Name: 'Emerald Green-DK',
    Red: 48,
    Green: 116,
    Blue: 91,
    RGB: '#30745B'
  },
  {
    DMC: 911,
    Name: 'Emerald Green-MD',
    Red: 49,
    Green: 128,
    Blue: 97,
    RGB: 318061
  },
  {
    DMC: 912,
    Name: 'Emerald Green-LT',
    Red: 115,
    Green: 158,
    Blue: 115,
    RGB: 7.39e75
  },
  {
    DMC: 913,
    Name: 'Nile Green-MD',
    Red: 153,
    Green: 188,
    Blue: 149,
    RGB: '#99BC95'
  },
  {
    DMC: 915,
    Name: 'Plum-DK',
    Red: 170,
    Green: 24,
    Blue: 91,
    RGB: '#AA185B'
  },
  {
    DMC: 917,
    Name: 'Plum-MD',
    Red: 171,
    Green: 22,
    Blue: 95,
    RGB: '#AB165F'
  },
  {
    DMC: 918,
    Name: 'Red Copper-DK',
    Red: 168,
    Green: 68,
    Blue: 76,
    RGB: '#A8444C'
  },
  {
    DMC: 919,
    Name: 'Red Copper',
    Red: 180,
    Green: 75,
    Blue: 82,
    RGB: '#B44B52'
  },
  {
    DMC: 920,
    Name: 'Copper-MD',
    Red: 197,
    Green: 94,
    Blue: 88,
    RGB: '#C55E58'
  },
  {
    DMC: 921,
    Name: 'Copper',
    Red: 206,
    Green: 103,
    Blue: 91,
    RGB: '#CE675B'
  },
  {
    DMC: 922,
    Name: 'Copper-LT',
    Red: 237,
    Green: 134,
    Blue: 115,
    RGB: '#ED8673'
  },
  {
    DMC: 924,
    Name: 'Grey Green--VY DK',
    Red: 86,
    Green: 99,
    Blue: 100,
    RGB: 566364
  },
  {
    DMC: 926,
    Name: 'Grey Green-LT',
    Red: 96,
    Green: 116,
    Blue: 115,
    RGB: 607473
  },
  {
    DMC: 927,
    Name: 'Grey Green-LT',
    Red: 200,
    Green: 198,
    Blue: 194,
    RGB: '#C8C6C2'
  },
  {
    DMC: 928,
    Name: 'Grey Green--VY LT',
    Red: 225,
    Green: 224,
    Blue: 216,
    RGB: '#E1E0D8'
  },
  {
    DMC: 930,
    Name: 'Antique Blue-DK',
    Red: 102,
    Green: 122,
    Blue: 140,
    RGB: '#667A8C'
  },
  {
    DMC: 931,
    Name: 'Antique Blue-MD',
    Red: 124,
    Green: 135,
    Blue: 145,
    RGB: '#7C8791'
  },
  {
    DMC: 932,
    Name: 'Antique Blue-LT',
    Red: 182,
    Green: 186,
    Blue: 194,
    RGB: '#B6BAC2'
  },
  {
    DMC: 934,
    Name: 'Black Avocado Green',
    Red: 62,
    Green: 59,
    Blue: 40,
    RGB: '#3E3B28'
  },
  {
    DMC: 935,
    Name: 'Avocado Green-DK',
    Red: 67,
    Green: 63,
    Blue: 47,
    RGB: '#433F2F'
  },
  {
    DMC: 936,
    Name: 'Avocado Green--VY D',
    Red: 69,
    Green: 69,
    Blue: 49,
    RGB: 454531
  },
  {
    DMC: 937,
    Name: 'Avocado Green-MD',
    Red: 73,
    Green: 86,
    Blue: 55,
    RGB: 495637
  },
  {
    DMC: 938,
    Name: 'Coffee Brown-ULT DK',
    Red: 99,
    Green: 39,
    Blue: 16,
    RGB: 632710
  },
  {
    DMC: 939,
    Name: 'Navy Blue-Vy DK',
    Red: 0,
    Green: 0,
    Blue: 49,
    RGB: 31
  },
  {
    DMC: 943,
    Name: 'Aquamarine-MD',
    Red: 0,
    Green: 162,
    Blue: 117,
    RGB: '#00A275'
  },
  {
    DMC: 945,
    Name: 'Flesh-MD',
    Red: 255,
    Green: 206,
    Blue: 164,
    RGB: '#FFCEA4'
  },
  {
    DMC: 946,
    Name: 'Burnt Orange-MD',
    Red: 244,
    Green: 73,
    Blue: 0,
    RGB: '#F44900'
  },
  {
    DMC: 947,
    Name: 'Burnt Orange',
    Red: 255,
    Green: 91,
    Blue: 0,
    RGB: '#FF5B00'
  },
  {
    DMC: 948,
    Name: 'Peach Flesh-VY LT',
    Red: 255,
    Green: 243,
    Blue: 231,
    RGB: '#FFF3E7'
  },
  {
    DMC: 950,
    Name: 'Sportsman Flesh',
    Red: 239,
    Green: 162,
    Blue: 127,
    RGB: '#EFA27F'
  },
  {
    DMC: 951,
    Name: 'Flesh',
    Red: 255,
    Green: 229,
    Blue: 188,
    RGB: '#FFE5BC'
  },
  {
    DMC: 954,
    Name: 'Nile Green',
    Red: 170,
    Green: 213,
    Blue: 164,
    RGB: '#AAD5A4'
  },
  {
    DMC: 955,
    Name: 'Nile Green-LT',
    Red: 214,
    Green: 230,
    Blue: 204,
    RGB: '#D6E6CC'
  },
  {
    DMC: 956,
    Name: 'Geranium',
    Red: 255,
    Green: 109,
    Blue: 115,
    RGB: '#FF6D73'
  },
  {
    DMC: 957,
    Name: 'Gernanium-PALE',
    Red: 255,
    Green: 204,
    Blue: 208,
    RGB: '#FFCCD0'
  },
  {
    DMC: 958,
    Name: 'Sea Green-DK',
    Red: 0,
    Green: 160,
    Blue: 130,
    RGB: '#00A082'
  },
  {
    DMC: 959,
    Name: 'Sea Green-MD',
    Red: 171,
    Green: 206,
    Blue: 177,
    RGB: '#ABCEB1'
  },
  {
    DMC: 961,
    Name: 'Dusty Rose-DK',
    Red: 243,
    Green: 108,
    Blue: 123,
    RGB: '#F36C7B'
  },
  {
    DMC: 962,
    Name: 'Dusty Rose-MD',
    Red: 253,
    Green: 134,
    Blue: 141,
    RGB: '#FD868D'
  },
  {
    DMC: 963,
    Name: 'Dusty Rose-ULT VY L',
    Red: '',
    Green: 233,
    Blue: 233,
    RGB: '#FFE9E9'
  },
  {
    DMC: 964,
    Name: 'Sea Green-LT',
    Red: 208,
    Green: 224,
    Blue: 210,
    RGB: '#D0E0D2'
  },
  {
    DMC: 966,
    Name: 'Baby Green-MD',
    Red: 206,
    Green: 213,
    Blue: 176,
    RGB: '#CED5B0'
  },
  {
    DMC: 970,
    Name: 'Pumpkin-LT',
    Red: 255,
    Green: 117,
    Blue: 24,
    RGB: '#FF7518'
  },
  {
    DMC: 971,
    Name: 'Pumpkin',
    Red: 255,
    Green: 106,
    Blue: 0,
    RGB: '#FF6A00'
  },
  {
    DMC: 972,
    Name: 'Canary-DP',
    Red: 255,
    Green: 146,
    Blue: 0,
    RGB: '#FF9200'
  },
  {
    DMC: 973,
    Name: 'Canary-BRT',
    Red: 255,
    Green: 194,
    Blue: 67,
    RGB: '#FFC243'
  },
  {
    DMC: 975,
    Name: 'Golden Brown-DK',
    Red: 158,
    Green: 67,
    Blue: 18,
    RGB: '#∞E+00'
  },
  {
    DMC: 976,
    Name: 'Golden Brown-MD',
    Red: 246,
    Green: 141,
    Blue: 57,
    RGB: '#F68D39'
  },
  {
    DMC: 977,
    Name: 'Golden Brown-LT',
    Red: 255,
    Green: 164,
    Blue: 73,
    RGB: '#FFA449'
  },
  {
    DMC: 986,
    Name: 'Forest Green-VY DK',
    Red: 58,
    Green: 82,
    Blue: 65,
    RGB: '#3A5241'
  },
  {
    DMC: 987,
    Name: 'Forest Green-DK',
    Red: 83,
    Green: 97,
    Blue: 73,
    RGB: 536149
  },
  {
    DMC: 988,
    Name: 'Forest Green-MD',
    Red: 134,
    Green: 145,
    Blue: 110,
    RGB: '#86916E'
  },
  {
    DMC: 989,
    Name: 'Forest Green',
    Red: 134,
    Green: 153,
    Blue: 110,
    RGB: '#86996E'
  },
  {
    DMC: 991,
    Name: 'Aquamarine-DK',
    Red: 47,
    Green: 91,
    Blue: 73,
    RGB: '#2F5B49'
  },
  {
    DMC: 992,
    Name: 'Aquamarine',
    Red: 146,
    Green: 183,
    Blue: 165,
    RGB: '#92B7A5'
  },
  {
    DMC: 993,
    Name: 'Aquamarine-LT',
    Red: 192,
    Green: 224,
    Blue: 200,
    RGB: '#C0E0C8'
  },
  {
    DMC: 995,
    Name: 'Electric Blue-DK',
    Red: 0,
    Green: 123,
    Blue: 134,
    RGB: '#007B86'
  },
  {
    DMC: 996,
    Name: 'Electric Blue-MD',
    Red: 170,
    Green: 222,
    Blue: 225,
    RGB: '#AADEE1'
  },
  {
    DMC: 3011,
    Name: 'Khaki Green-DK',
    Red: 123,
    Green: 91,
    Blue: 64,
    RGB: '#7B5B40'
  },
  {
    DMC: 3012,
    Name: 'Khaki Green-MD',
    Red: 170,
    Green: 134,
    Blue: 103,
    RGB: '#AA8667'
  },
  {
    DMC: 3013,
    Name: 'Khaki Green-LT',
    Red: 208,
    Green: 195,
    Blue: 164,
    RGB: '#D0C3A4'
  },
  {
    DMC: 3021,
    Name: 'Brown Grey - VY DK',
    Red: 115,
    Green: 91,
    Blue: 93,
    RGB: '#735B5D'
  },
  {
    DMC: 3022,
    Name: 'Brown Grey - MD',
    Red: 172,
    Green: 172,
    Blue: 170,
    RGB: '#ACACAA'
  },
  {
    DMC: 3023,
    Name: 'Brown Grey - LT',
    Red: 198,
    Green: 190,
    Blue: 173,
    RGB: '#C6BEAD'
  },
  {
    DMC: 3024,
    Name: 'Brown Grey - VY LT',
    Red: 210,
    Green: 208,
    Blue: 205,
    RGB: '#D2D0CD'
  },
  {
    DMC: 3031,
    Name: 'Mocha Brown-VY DK',
    Red: 84,
    Green: 56,
    Blue: 23,
    RGB: 543817
  },
  {
    DMC: 3032,
    Name: 'Mocha Brown-MD',
    Red: 188,
    Green: 156,
    Blue: 120,
    RGB: '#BC9C78'
  },
  {
    DMC: 3033,
    Name: 'Mocha Brown-VY LT',
    Red: 239,
    Green: 219,
    Blue: 190,
    RGB: '#EFDBBE'
  },
  {
    DMC: 3041,
    Name: 'Antique Violet-MD',
    Red: 190,
    Green: 155,
    Blue: 167,
    RGB: '#BE9BA7'
  },
  {
    DMC: 3042,
    Name: 'Antique Violet-LT',
    Red: 225,
    Green: 205,
    Blue: 200,
    RGB: '#E1CDC8'
  },
  {
    DMC: 3045,
    Name: 'Yellow Beige-DK',
    Red: 216,
    Green: 151,
    Blue: 105,
    RGB: '#D89769'
  },
  {
    DMC: 3046,
    Name: 'Yellow Beige-MD',
    Red: 229,
    Green: 193,
    Blue: 139,
    RGB: '#E5C18B'
  },
  {
    DMC: 3047,
    Name: 'Yellow Beige-LT',
    Red: 255,
    Green: 236,
    Blue: 211,
    RGB: '#FFECD3'
  },
  {
    DMC: 3051,
    Name: 'Green Grey-DK',
    Red: 85,
    Green: 73,
    Blue: 0,
    RGB: 554900
  },
  {
    DMC: 3052,
    Name: 'Green Grey--MD',
    Red: 137,
    Green: 141,
    Blue: 114,
    RGB: '#898D72'
  },
  {
    DMC: 3053,
    Name: 'Green Grey',
    Red: 187,
    Green: 179,
    Blue: 148,
    RGB: '#BBB394'
  },
  {
    DMC: 3064,
    Name: 'Sportsman Flsh-VY D',
    Red: 194,
    Green: 101,
    Blue: 76,
    RGB: '#C2654C'
  },
  {
    DMC: 3072,
    Name: 'Beaver Grey - VY LT',
    Red: 233,
    Green: 233,
    Blue: 223,
    RGB: '#E9E9DF'
  },
  {
    DMC: 3078,
    Name: 'Golden Yellow-VY LT',
    Red: 255,
    Green: 255,
    Blue: 220,
    RGB: '#FFFFDC'
  },
  {
    DMC: 3325,
    Name: 'Baby Blue-LT',
    Red: 202,
    Green: 226,
    Blue: 229,
    RGB: '#CAE2E5'
  },
  {
    DMC: 3326,
    Name: 'Rose-LT',
    Red: 255,
    Green: 157,
    Blue: 150,
    RGB: '#FF9D96'
  },
  {
    DMC: 3328,
    Name: 'Salmon-DK',
    Red: 188,
    Green: 64,
    Blue: 85,
    RGB: '#BC4055'
  },
  {
    DMC: 3340,
    Name: 'Apricot-MD',
    Red: 255,
    Green: 123,
    Blue: 103,
    RGB: '#FF7B67'
  },
  {
    DMC: 3341,
    Name: 'Apricot',
    Red: 255,
    Green: 172,
    Blue: 162,
    RGB: '#EBACA2'
  },
  {
    DMC: 3345,
    Name: 'Hunter Green-DK',
    Red: 97,
    Green: 100,
    Blue: 82,
    RGB: 616452
  },
  {
    DMC: 3346,
    Name: 'Hunter Green',
    Red: 120,
    Green: 134,
    Blue: 107,
    RGB: '#78866B'
  },
  {
    DMC: 3347,
    Name: 'Yellow Green-MD',
    Red: 128,
    Green: 152,
    Blue: 115,
    RGB: 809873
  },
  {
    DMC: 3348,
    Name: 'Yellow Green-LT',
    Red: 225,
    Green: 249,
    Blue: 190,
    RGB: '#E1F9BE'
  },
  {
    DMC: 3350,
    Name: 'Dusty Rose-ULT DK',
    Red: 201,
    Green: 79,
    Blue: 91,
    RGB: '#C94F5B'
  },
  {
    DMC: 3354,
    Name: 'Dusty Rose-LT',
    Red: 255,
    Green: 214,
    Blue: 209,
    RGB: '#FFD6D1'
  },
  {
    DMC: 3362,
    Name: 'Pine Green-DK',
    Red: 96,
    Green: 95,
    Blue: 84,
    RGB: '#605F54'
  },
  {
    DMC: 3363,
    Name: 'Pine Green-MD',
    Red: 116,
    Green: 127,
    Blue: 96,
    RGB: '#747F60'
  },
  {
    DMC: 3364,
    Name: 'Pine Green',
    Red: 161,
    Green: 167,
    Blue: 135,
    RGB: '#A1A787'
  },
  {
    DMC: 3371,
    Name: 'Black Brown',
    Red: 83,
    Green: 37,
    Blue: 16,
    RGB: 532510
  },
  {
    DMC: 3607,
    Name: 'Plum-LT',
    Red: 231,
    Green: 79,
    Blue: 134,
    RGB: '#E74F86'
  },
  {
    DMC: 3608,
    Name: 'Plum-VY LT',
    Red: 247,
    Green: 152,
    Blue: 182,
    RGB: '#F798B6'
  },
  {
    DMC: 3609,
    Name: 'Plum-ULT LT',
    Red: 255,
    Green: 214,
    Blue: 229,
    RGB: '#FFD6E5'
  },
  {
    DMC: 3685,
    Name: 'Mauve-DK',
    Red: 161,
    Green: 53,
    Blue: 79,
    RGB: '#A1354F'
  },
  {
    DMC: 3687,
    Name: 'Mauve',
    Red: 203,
    Green: 78,
    Blue: 97,
    RGB: '#CB4E61'
  },
  {
    DMC: 3688,
    Name: 'Mauve-MD',
    Red: 250,
    Green: 151,
    Blue: 144,
    RGB: '#FA9790'
  },
  {
    DMC: 3689,
    Name: 'Mauve-LT',
    Red: 255,
    Green: 213,
    Blue: 216,
    RGB: '#FFD5D8'
  },
  {
    DMC: 3705,
    Name: 'Melon-DK',
    Red: 255,
    Green: 85,
    Blue: 91,
    RGB: '#FF555B'
  },
  {
    DMC: 3706,
    Name: 'Melon-MD',
    Red: 255,
    Green: 128,
    Blue: 109,
    RGB: '#FF806D'
  },
  {
    DMC: 3708,
    Name: 'Melon-LT',
    Red: 254,
    Green: 212,
    Blue: 219,
    RGB: '#FED4DB'
  },
  {
    DMC: 3712,
    Name: 'Salmon-MD',
    Red: 230,
    Green: 101,
    Blue: 107,
    RGB: '#E6656B'
  },
  {
    DMC: 3713,
    Name: 'Salmon-VY LT',
    Red: 253,
    Green: 229,
    Blue: 217,
    RGB: '#FDE5D9'
  },
  {
    DMC: 3716,
    Name: 'Dusty Rose-VY LT',
    Red: 255,
    Green: 211,
    Blue: 212,
    RGB: '#FFD3D4'
  },
  {
    DMC: 3721,
    Name: 'Shell Pink-DK',
    Red: 184,
    Green: 75,
    Blue: 77,
    RGB: '#B84B4D'
  },
  {
    DMC: 3722,
    Name: 'Shell Pink-MD',
    Red: 184,
    Green: 89,
    Blue: 88,
    RGB: '#B85958'
  },
  {
    DMC: 3726,
    Name: 'Antique Mauve-DK',
    Red: 195,
    Green: 118,
    Blue: 123,
    RGB: '#C3767B'
  },
  {
    DMC: 3727,
    Name: 'Antique Mauve-LT',
    Red: 255,
    Green: 199,
    Blue: 196,
    RGB: '#FFC7C4'
  },
  {
    DMC: 3731,
    Name: 'Dusty Rose-VY DK',
    Red: 209,
    Green: 93,
    Blue: 103,
    RGB: '#D15D67'
  },
  {
    DMC: 3733,
    Name: 'Dusty Rose',
    Red: 255,
    Green: 154,
    Blue: 148,
    RGB: '#FF9A94'
  },
  {
    DMC: 3740,
    Name: 'Antique Violet-DK',
    Red: 156,
    Green: 125,
    Blue: 133,
    RGB: '#9C7D85'
  },
  {
    DMC: 3743,
    Name: 'Antique Violet-VY L',
    Red: 235,
    Green: 235,
    Blue: 231,
    RGB: '#EBEBE7'
  },
  {
    DMC: 3746,
    Name: 'Blue Violet-DK',
    Red: 149,
    Green: 102,
    Blue: 162,
    RGB: '#9566A2'
  },
  {
    DMC: 3747,
    Name: 'Blue Violet-VY LT',
    Red: 230,
    Green: 236,
    Blue: 232,
    RGB: '#E6ECE8'
  },
  {
    DMC: 3750,
    Name: 'Antique Blue-VY DK',
    Red: 12,
    Green: 91,
    Blue: 108,
    RGB: '#0C5B6C'
  },
  {
    DMC: 3752,
    Name: 'Antique Blue-VY LT',
    Red: 194,
    Green: 209,
    Blue: 206,
    RGB: '#C2D1CE'
  },
  {
    DMC: 3753,
    Name: 'Ant. Blue-ULT VY LT',
    Red: 237,
    Green: 247,
    Blue: 247,
    RGB: '#EDF7F7'
  },
  {
    DMC: 3755,
    Name: 'Baby Blue',
    Red: 158,
    Green: 176,
    Blue: 206,
    RGB: '#9EB0CE'
  },
  {
    DMC: 3756,
    Name: 'Baby Blue-ULT VY LT',
    Red: 248,
    Green: 248,
    Blue: 252,
    RGB: '#F8F8FC'
  },
  {
    DMC: 3760,
    Name: 'Wedgewood',
    Red: 102,
    Green: 142,
    Blue: 152,
    RGB: 6.68e100
  },
  {
    DMC: 3761,
    Name: 'Sky Blue-LT',
    Red: 227,
    Green: 234,
    Blue: 230,
    RGB: '#E3EAE6'
  },
  {
    DMC: 3765,
    Name: 'Peacock Blue-VY DK',
    Red: 24,
    Green: 128,
    Blue: 134,
    RGB: 188086
  },
  {
    DMC: 3766,
    Name: 'Peacock Blue-LT',
    Red: 24,
    Green: 101,
    Blue: 111,
    RGB: '#18656F'
  },
  {
    DMC: 3768,
    Name: 'Grey Green-DK',
    Red: 92,
    Green: 110,
    Blue: 108,
    RGB: '#5C6E6C'
  },
  {
    DMC: 3770,
    Name: 'Flesh-VY LT',
    Red: 255,
    Green: 250,
    Blue: 224,
    RGB: '#FFFAE0'
  },
  {
    DMC: 3772,
    Name: 'Negro Flesh',
    Red: 173,
    Green: 83,
    Blue: 62,
    RGB: '#AD533E'
  },
  {
    DMC: 3773,
    Name: 'Sportsman Flsh-MD',
    Red: 231,
    Green: 134,
    Blue: 103,
    RGB: '#E78667'
  },
  {
    DMC: 3774,
    Name: 'Sportsman Flsh-VY L',
    Red: 255,
    Green: 220,
    Blue: 193,
    RGB: '#FFDCC1'
  },
  {
    DMC: 3776,
    Name: 'Mahogony-LT',
    Red: 221,
    Green: 109,
    Blue: 91,
    RGB: '#DD6D5B'
  },
  {
    DMC: 3777,
    Name: 'Terra Cotta-VY DK',
    Red: 191,
    Green: 64,
    Blue: 36,
    RGB: '#BF4024'
  },
  {
    DMC: 3778,
    Name: 'Terra Cotta-LT',
    Red: 237,
    Green: 122,
    Blue: 100,
    RGB: '#ED7A64'
  },
  {
    DMC: 3779,
    Name: 'Ter. Cotta-ULT VY L',
    Red: 255,
    Green: 177,
    Blue: 152,
    RGB: '#FFB198'
  },
  {
    DMC: 3781,
    Name: 'Mocha Brown-DK',
    Red: 113,
    Green: 71,
    Blue: 42,
    RGB: '#71472A'
  },
  {
    DMC: 3782,
    Name: 'Mocho Brown-LT',
    Red: 206,
    Green: 175,
    Blue: 144,
    RGB: '#CEAF90'
  },
  {
    DMC: 3787,
    Name: 'Brown Grey - DK',
    Red: 139,
    Green: 109,
    Blue: 115,
    RGB: '#8B6D73'
  },
  {
    DMC: 3790,
    Name: 'Beige Grey - ULT DK',
    Red: 140,
    Green: 117,
    Blue: 109,
    RGB: '#8C756D'
  },
  {
    DMC: 3799,
    Name: 'Pewter Grey - VY DK',
    Red: 81,
    Green: 76,
    Blue: 83,
    RGB: '#514C53'
  }
]
