import { combineReducers } from 'redux'
import { GET_PROJECT_DETAILS, CHANGE_COLOR, SET_PROJECT_DETAILS, ADD_COLOR, ALL_COLORS, GET_GRID } from '../store'

// Add any initial state properties. Use Tom's First Law
const detailsState = {
  width: 0,
  height: 0,
  margin: 0,
  tpi: 0,
  color: {},
  allColors: [],
  colorCount: {},
  fabric: '',
  grid: []
}
// Use these reducers if it'd be better to split up actions
// export these if needed
const detailsReducer = (state = detailsState, action) => {
  switch (action.type) {
    case GET_GRID:
      return {...state, grid: action.grid}
    case SET_PROJECT_DETAILS:
      return {...action.details}
    case GET_PROJECT_DETAILS:
      return {...state}
    case CHANGE_COLOR:
      return { ...state, color: action.color }
    case ALL_COLORS:
      return { ...state, allColors: { ...state.allColors } }
    case ADD_COLOR:
      if (state.colorCount.hasOwnProperty(action.color.RGB)) {
        let addToColor = { ...state.colorCount }
        addToColor[action.color.RGB]++
        return { ...state, colorCount: { ...addToColor } }
      } else {
        //add new item to color count
        let addToColor = { ...state.colorCount }
        addToColor[action.color.RGB] = 1

        //add new item to allColors
        let newColor = [...state.allColors, action.color]

        return { ...state, allColors: newColor, colorCount: {...state.colorCount, ...addToColor }
      }
    }
    default:
      return state
  }
}
// const reducer2 = (state = initialState, action) => {return state};

// This will be the main reducer
// export const reducer = (state = initialState, action) => {return state};

export const reducer = combineReducers({
  details: detailsReducer
  // reducer2: reducer2
})
