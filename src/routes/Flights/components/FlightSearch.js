import React from 'react'
import PropTypes from 'prop-types'
import FlightsList from './FlightsList'
import ShoppingCart from './ShoppingCart'

export const FlightSearch = ({  flights, getFlights, bookFlight, bookingInfo }) => {
  //const isEmpty = flights.length === 0;
  return (
  <div style={{ margin: '0 auto' }} >
    <h2>Search for flights  </h2>
    <div>
      <input type="text" className="form-control search-box-flights"  name="title" />

      <button className='btn btn-primary' onClick={getFlights}>
        Search
      </button>
    </div>

    {<div> <FlightsList flights={flights.flightsList} bookFlight={bookFlight}/></div>}

    {<ShoppingCart bookingInfo={flights.booking}/>}
  </div>
  )
}

FlightSearch.propTypes = {
   flights: PropTypes.object.isRequired,
   getFlights: PropTypes.func.isRequired,
   bookFlight: PropTypes.func.isRequired,
   bookingInfo : PropTypes.object
}

export default FlightSearch
