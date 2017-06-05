import React from 'react'
import PropTypes from 'prop-types'

const FlightsList = ({flights}) => (
	<ul>
	{flights.map(flight =>  
         <li className="flight" key={flight.id}>{flight.startTime}</li>
    )}
    </ul>
)

FlightsList.propTypes = {
  flights: PropTypes.array.isRequired
}

export default FlightsList