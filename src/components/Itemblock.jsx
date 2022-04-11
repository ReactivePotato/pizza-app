import React, { useState } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import '../styles/Itemblock.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addPizzaAction, clearPizzaAction } from './redux/reducers/pizzasInCartReducer'
import { changePizzaCost, dropPizzaCost } from './redux/reducers/pizzaCostReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Itemblock = ({ id, name, imageUrl, types, sizes, price, startprice }) => {

  const dispatch = useDispatch()

  // pizza types 
  const pizzaTypes = ['тонкое', 'традиционное']
  const sizeTypes = [26, 30, 40]

  //showed amount at pizza card
  const pizzasInCart = useSelector((it) => it.pizzasInCartReducer)
  const pizzasInitCost = useSelector((it) => it.pizzaCostReducer)

  let pizzasAmount = 0
  let pizzasCost = 0

  pizzasInCart.filter((it) => {
    if (it.pizza_id === id) {
      pizzasAmount = it.pizza_amount
    }
    return pizzasAmount
  }) 

  pizzasInitCost.filter((it) => {
    if (it.pizza_id === id) {
      pizzasCost = it.pizza_cost
    }
    return pizzasCost
  })
  
   //pizza types states
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(0)

  const onSelectType = (index) => {
    setActiveType(index)
  }

  const onSelectSize = (index) => {
    setActiveSize(index)
  }

  //adding pizza
  const addPizza = (id) => {
    dispatch(addPizzaAction({ pizza_id: id, pizza_amount: 1 }))
    let currentCost = price + (Math.round(price * sizeTypes[activeSize] / 100))
    dispatch(changePizzaCost({ pizza_id: id, pizza_type: activeType, pizza_cost: currentCost}))
  }

  //removing all pizzas
  const removeAllPizzas = (id) => {
    dispatch(clearPizzaAction({ pizza_id: id, pizza_amount: 0 }))
    dispatch(dropPizzaCost(({ pizza_id: id, pizza_type: activeType, pizza_cost: 0})))
  }

  return (
    <div className='pizza_card'>
      <div className='pizza_img'><img src={imageUrl} alt="" /></div>
      <div className='pizza_card_text'>{name}</div>
      <div className='pizza_start_price'>от {startprice} ₽. </div>
      <div className='pizza_params'>
        <div className='pizza_type_group'>
          {pizzaTypes.map((type, index) => <div
            key={type}
            onClick={() => onSelectType(index)}
            className={classNames({
              'pizza_type active': activeType === index,
              'pizza_type': activeType !== index,
              'disabled': !types.includes(index)
            })}>
            {type}
          </div>)}
        </div>
        {<div className='size_type_group'>
          {sizeTypes.map((size, index) => <div
            key={size}
            onClick={() => onSelectSize(index)}
            className={classNames({
              'size_type active': activeSize === index,
              'size_type': activeSize !== index,
              'disabled': !sizes.includes(size)
            })}>
            {size} см.</div>)}
        </div>}
      </div>
      <div className='price_buy_block'>
        <div className='pizza_price'>
          {pizzasCost} ₽.
        </div>
        <div className='pizza_buy_button' onClick={() => addPizza(id)}>
          <div className='buy_button_text'>+ Добавить</div>
          <div className='buy_button_cart_img'><FontAwesomeIcon icon={faCartShopping} /></div>
          <div className='buy_button_amount_bg'><div className='buy_button_amount'>{pizzasAmount}</div></div>
        </div>
        <div className="pizza_clear_button" onClick={() => removeAllPizzas(id)}>
          <div className='trash-bin'><FontAwesomeIcon icon={faTrash} /></div>
        </div>
      </div>
    </div>
  )
}

Itemblock.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  types: propTypes.arrayOf(propTypes.number).isRequired,
  sizes: propTypes.arrayOf(propTypes.number).isRequired
}

Itemblock.defaultProps = {
  name: 'default',
  imageUrl: 'url',
  types: [],
  sizes: []
}

export default Itemblock