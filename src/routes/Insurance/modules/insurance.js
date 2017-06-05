import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const XGET_INSURANCE_OPTIONS = 'GET_INSURANCE_OPTIONS' 
export const GET_INSURANCE_OPTIONS = 'GET_INSURANCE_OPTIONS' 

// ------------------------------------
// Actions
// ------------------------------------
 

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const getInsuranceOptions = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : GET_INSURANCE_OPTIONS,
//           payload : {
//             type: 'individual',
//             terms_url: 'http://www.united-insurers/travel/planA/terms',
//             price: 55.17
//           }
//         })
//         resolve( )
//       }, 200)
//     })
//   }
// }
  
export const getInsuranceOptions = () => {
  return (dispatch, getState) => {
      fetch(`http://localhost:3000/api/insurance`) 
      .then( response => response.json())
      .then( json =>  dispatch({
            type    : GET_INSURANCE_OPTIONS,
            payload: json             
          }) 
      ) 
  }
} 
 

export const actions = {
  getInsuranceOptions
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [XGET_INSURANCE_OPTIONS]    : (state, action) =>  {console.log('Xmk state:' + state) ;},
  [GET_INSURANCE_OPTIONS] : (state, action) => action.payload  
}

// ------------------------------------
// Reducer
// ------------------------------------
//const initialState = {insuranceOption : {price: 40} }
const initialState = null //{ insurance: {}}
export default function insuranceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
console.log('handler:   for ' + action.type + handler );
  return handler ? handler(state, action) : state
}
