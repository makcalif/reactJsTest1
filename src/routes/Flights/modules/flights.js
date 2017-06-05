// ------------------------------------
// Constants
// ------------------------------------
export const GET_FLIGHTS = 'GET_FLIGHTS'  
export const BOOKING_DONE = 'BOOKING_DONE'
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
            payload: {"flightsList": json}
          }) 
      ) 
  }
} 

export const bookFlight = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/api/booking`, {
         headers : {
            'Accept': 'application/json',
            'Content-type': 'application/json'
         },  
         method: "POST",
         body: JSON.stringify({"id": id})
     }) 
      .then( response => response.json())
      .then( json =>  dispatch({
            type    : BOOKING_DONE,
            payload: {"booking": json, "flightsList": []}            
          }) 
      ) 
  }
  
}

export const actions = {
  getFlights,
  bookFlight
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = { 
  [GET_FLIGHTS] : (state, action) => action.payload ,  
  [BOOKING_DONE] : (state, action) => action.payload  
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {"flightsList": []} //{ insurance: {}}
export default function flightsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type] 
  return handler ? handler(state, action) : state
}
