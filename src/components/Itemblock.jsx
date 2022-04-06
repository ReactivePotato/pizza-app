import React, { useState } from 'react'
import '../styles/Itemblock.scss'

const Itemblock = ({ name, imageUrl }) => {

  const pizzaTypes = ['тонкое', 'традиционное']
  const sizeTypes = ['26 см.', '30 см.', '40 см.']

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  const onSelectType = (index) => {
    console.log(index)
    setActiveType(index)
  }

  return (
    <div className='pizza-card'>
      <div className='pizza-img'><img src={imageUrl} alt="" /></div>
      <div className='pizza-card-text'>{name}</div>
      <div className='pizza-params'>
        <div className='pizza-type-group'>
          {pizzaTypes.map((type, index) => <div 
          onClick={() => onSelectType(index)}
          className={activeType === index ? 'pizza-type-active' : 'pizza-type'}>
            {type}
          </div>)}
        </div>
        <div className='size-type-group'>
          {sizeTypes.map((size) => <div className='size-type'>{size}</div>)}
        </div>
      </div>
    </div>
  )
}

export default Itemblock