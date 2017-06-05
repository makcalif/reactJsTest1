// ------------------------------------
// Constants
// ------------------------------------
export const GET_FLIGHTS = 'GET_FLIGHTS' 

// ------------------------------------
// Actions
// ------------------------------------
 
export const getFlights = (origin, destination) => {
  return (dispatch, getState) => {
      fetch(`http://localhost:3000/api/flights`) //, { //?origin=${origin}&destination=${destination}`, {
      //   method: "GET"
      // }) 
      .then( response => response.json())
      .then( json =>  dispatch({
            type    : GET_FLIGHTS,
            payload: json             
          }) 
      ) 
  }
} 

export const actions = {
  getFlights
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = { 
  [GET_FLIGHTS] : (state, action) => action.payload  
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [] //{ insurance: {}}
export default function flightsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type] 
  return handler ? handler(state, action) : state
}
