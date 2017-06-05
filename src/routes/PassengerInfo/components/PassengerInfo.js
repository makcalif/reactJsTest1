import React from 'react'
import PropTypes from 'prop-types'

export const PassengerInfo = ({  savePassengerInfo }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>PassengerInfo</h2>
    <button className='btn btn-primary' onClick={savePassengerInfo}>
      Next
    </button>     
  </div>
)
PassengerInfo.propTypes = {
  savePassengerInfo: PropTypes.func.isRequired, 
}

export default PassengerInfo