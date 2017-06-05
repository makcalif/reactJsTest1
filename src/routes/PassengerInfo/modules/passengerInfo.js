// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_PASSENGER_INFO = 'SAVE_PASSENGER_INFO' 

// ------------------------------------
// Actions
// ------------------------------------
 
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const savePassengerInfo = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SAVE_PASSENGER_INFO,
          payload : {
            type: 'individual',
            terms_url: 'http://www.united-insurers/travel/planA/terms',
            price: 55.17
          }
        })
        resolve( )
      }, 200)
    })
  }
}

export const actions = {
  savePassengerInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [savePassengerInfo]    : (state, action) =>  {console.log('Xmk savePassengerInfo:' + state) ;} 
}

// ------------------------------------
// Reducer
// ------------------------------------
//const initialState = {insuranceOption : {price: 40} }
const initialState = null //{ insurance: {}}
export default function passengerInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
console.log('handler:   for ' + action.type + handler );
  return handler ? handler(state, action) : state
}
