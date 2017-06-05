import React from 'react'
import PropTypes from 'prop-types'
import FlightsList from './FlightsList'
 
export const Flights = ({  flights, getFlights  }) => {
  const isEmpty = flights.length === 0 ? true : false;
  return (
  <div style={{ margin: '0 auto' }} >
    <h2>Flights:  </h2>
    {isEmpty ? <div> dempy</div> : <div> <FlightsList flights={flights}/></div>}

    <button className='btn btn-primary' onClick={getFlights}>
      Search
    </button>

  </div>
  )
}

Flights.propTypes = {
   flights: PropTypes.array,
   getFlights: PropTypes.func.isRequired
}

export default Flights
