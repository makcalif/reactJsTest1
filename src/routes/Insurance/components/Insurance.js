import React from 'react'
import PropTypes from 'prop-types'

export const Insurance = ({ insuranceOption, getInsuranceOptions}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Insurance</h2>

    <div> price: {insuranceOption ? insuranceOption.price : 'nothign'}</div>

    

    <button className='btn btn-primary' onClick={getInsuranceOptions}>
      get insurance
    </button>
    
  </div>
)
Insurance.propTypes = {
  insuranceOption: PropTypes.object,
  getInsuranceOptions: PropTypes.func.isRequired,
}

export default Insurance