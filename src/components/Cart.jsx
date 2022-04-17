import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const pizzasInCart = useSelector((it) => it.pizzasInCartReducer)
  return(
    pizzasInCart.map((it) => {
      return it.pizza_id
    })
  )
}

export default Cart