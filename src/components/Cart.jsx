import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const pizzasInCart = useSelector((it) => it.pizzasInCartReducer)
  return(
    pizzasInCart.map((it) => {
      return <div>{it.pizza_id} - {it.pizza_amount}</div>
    })
  )
}

export default Cart