import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left_col'>
        <ul>
          <li><Link to="/aboutus">О нас</Link></li>
          <li><Link to="/faq">Частые вопросы</Link></li>
          <li><Link to="/terms">Пользовательское соглашение</Link></li>
          <li><Link to="/policy">Политика конфиденциальности</Link></li>
        </ul>
      </div>
      <div className='footer_mid_col'>
      <ul>
          <li><Link to="/franchise">Франшиза</Link></li>
          <li><Link to="/invest">Инвестиции</Link></li>
          <li><Link to="/dealers">Поставщикам</Link></li>
          <li><Link to="/feedback">Предложения</Link></li>
        </ul>
      </div>
      <div className='footer_right_col'>
      <ul>
          <li><SocialIcon url="https://instagram.com" style={{width: 30, height: 30 }}/></li>
          <li><SocialIcon url="https://vk.com"/></li>
          <li><SocialIcon url="https://whatsapp.com"/></li>
          <li><SocialIcon url="https://telegram.com"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer