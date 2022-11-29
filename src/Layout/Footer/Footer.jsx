import React from 'react'
import Image from '../../assets/footer/Group 295.svg'

const Footer = () => {
  return (
<footer className='footer'>
        <div className="container">
        <div className="footer-lins"></div>
          <h2 className='footer__h2' >Будьте в курсе событий</h2>
          <div className="footer__block">
            <input className='footer__input' type="text" />
            <a className='footer__a' href="#"><img src={Image} alt="" /></a>
          </div>
          <div className="footer__info">
            <a className='footer__info-a' href="">О нас</a>
            <a className='footer__info-a' href="">Распространенные вопросы</a>
            <a className='footer__info-a' href="">Бренды</a>
          </div>
          <div className="footer-lin"></div>
          <div className="footer__information">
            <p className='footer__protected'>Все права защищены  © 2020 Allegria.com</p>
            <p className='footer__author'>Дизайн и разработка:</p>
          </div>
        </div>
        
    </footer>  )
}

export default Footer