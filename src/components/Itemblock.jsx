import React, { useState } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import '../styles/Itemblock.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addPizzaAction } from './redux/reducers/addPizzaReducer'
import { removePizzaAction } from './redux/reducers/removePizzaReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Itemblock = ({ id, name, imageUrl, types, sizes, price }) => {

  const dispatch = useDispatch()

  const pizzaTypes = ['тонкое', 'традиционное']
  const sizeTypes = [26, 30, 40]

  const pizzasInCart = useSelector((it) => it.pizzasState)

  let pizzasAmount = 0

  pizzasInCart.filter((it) => {
    if (it.pizza_id === id) {
      pizzasAmount = it.pizza_amount
    }
  })


  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(0)

  const onSelectType = (index) => {
    setActiveType(index)
  }

  const onSelectSize = (index) => {
    setActiveSize(index)
  }

  const addPizza = (id) => {
    dispatch(addPizzaAction({ pizza_id: id, pizza_amount: 1 }))
  }

  const removePizza = (id) => {
    dispatch(removePizzaAction({ pizza_id: id, pizza_amount: 0}))
  }

  return (
    <div className='pizza_card'>
      <div className='pizza_img'><img src={imageUrl} alt="" /></div>
      <div className='pizza_card_text'>{name}</div>
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
          от {price} ₽.
        </div>
        <div className='pizza_buy_button' onClick={() => addPizza(id)}>
          <div>+ Добавить</div>
          <div className='buy_button_amount'>{pizzasAmount}</div>
        </div>
        <div className="pizza_clear_button">
            <div className='trash-bin' onClick={() => removePizza(id)}><FontAwesomeIcon icon={faTrash} /></div>
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