import React from 'react'
import PropTypes from 'prop-types'

const FlightsList = ({flights, selectFlight, bookFlight}) =>   
  (
	<ul>
	{flights.map(flight =>  
         <div key={flight.id}>
         	<div className='flight-cell'>{flight.origin}</div>
         	<div className='flight-cell'>{flight.startTime}</div>
         	<div className='flight-cell'>{flight.destination}</div>
         	<div className='flight-cell'>{flight.airline}</div>
         	<div className='flight-cell price'>{flight.price}</div>
         	<div className='flight-cell'><button onClick={ ( ) =>  bookFlight( flight.id ) }> details </button></div>
         </div>
    )}
    </ul>
  ) 

FlightsList.propTypes = {
  flights: PropTypes.array,
  bookFlight: PropTypes.func.isRequired
}

export default FlightsList