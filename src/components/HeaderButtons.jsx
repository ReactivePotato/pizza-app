import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const HeaderButtons = () => {
  return (
    <div className='header-buttons'>
      <div className='header-btn-amount'>$100</div>
      <div className='header-btn-divider'></div>
      <div className='header-btn-cart'><FontAwesomeIcon icon={faCartShopping} /></div>
    </div>
  )
}

export default HeaderButtons
