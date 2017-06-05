import React from 'react'
import PropTypes from 'prop-types'
 

const cartPrice = (bookingInfo) => {
	if (bookingInfo) return (
		<h2>Cart price: {bookingInfo.price} </h2>
	)
}

export const ShoppingCart = ({  bookingInfo }) => {
  //const isEmpty = flights.length === 0;
  return (
  <div style={{ margin: '0 auto' }} >
    {cartPrice(bookingInfo)}     
  </div>
  )
}

ShoppingCart.propTypes = { 
   bookingInfo: PropTypes.object
}

export default ShoppingCart
