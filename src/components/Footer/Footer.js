import React from 'react'
import './Footer.scss'
import bgfooter from '../../images/bg-footer.png'
import fbIcon from '../../images/Facebook Icon.png'
import linkIcon from '../../images/Linkedin Icon.png'
import twitIcon from '../../images/Twitter Icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__upper_info">
            <div className="footer__main-info">
                <div className="footer__logo">Bodar</div>
                <div className="footer__web">Technology AI Generator Website</div>
            </div>

            <div className="footer__menu">
                <div className="footer__menu_item">
                    <span>Explore</span>
                    <div className="menu__item">Resources</div>
                    <div className="menu__item">Blog</div>
                    <div className="menu__item">Documents</div>
                </div>

                <div className="footer__menu_item">
                    <span>Menu</span>
                    <div className="menu__item">Home</div>
                    <div className="menu__item">About</div>
                    <div className="menu__item">Contact</div>
                </div>
            </div>

            <div className="footer__address">
                <span className='location'>OFFICE LOCATION</span>
                <div className="address">Address Line Lorem Ipsum Dolore Sit Amen</div>
            </div>
        </div>

        <div className="footer__info">
            <div className="terms__items">
                <div className="terms__item">Terms</div>
                <div className="terms__item">Privacy</div>
                <div className="terms__item">Cookies</div>
            </div>

            <div className="footer__rights">
                © 2024 By Enative. All Rights Reserved. 
            </div>

            <div className="footer__socials">
                <div className="social">
                    <img src={fbIcon} alt="" />
                </div>
                <div className="social">
                    <img src={linkIcon} alt="" />
                </div>
                <div className="social">
                    <img src={twitIcon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
