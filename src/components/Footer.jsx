import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer___block'>
      <div className='footer__text'>
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
          <ul className='social_icons'>
            <li><a href='https://instagram.com/'><FaInstagram className='social-insta' /></a></li>
            <li><a href='https://vk.com/'><FaVk className='social-vk' /></a></li>
            <li><a href='https://whatsapp.com/'><FaWhatsapp className='social-wa' /></a></li>
            <li><a href='https://telegram.com/'><FaTelegram className='social-tg' /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer