import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers/index'
import { createLogger } from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

// ACTION TYPES
export const GET_PROJECT_DETAILS = 'GET_PROJECT_DETAILS'
export const SET_PROJECT_DETAILS = 'SET_PROJECT_DETAILS'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const ALL_COLORS = 'ALL_COLORS'
export const ADD_COLOR = 'ADD_COLOR'
export const GET_GRID = 'GET_GRID'

// ACTION CREATORS
export const getProjectDetails = () => ({
  type: GET_PROJECT_DETAILS
})

export const getGrid = grid => ({
  type: GET_GRID,
  grid
})

export const getAllcolors = () => ({
  type: ALL_COLORS
})

export const addColor = color => ({
  type: ADD_COLOR,
  color
})

export const setProjectDetails = details => ({
  type: SET_PROJECT_DETAILS,
  details
})

export const changedColor = color => ({
  type: CHANGE_COLOR,
  color
})

// THUNKS


const store = createStore(
  reducer,
  // `withExtraArgument` gives us access to axios in our async action creators!
  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
  // thunkMiddleware.withExtraArgument({ axios }),
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store
