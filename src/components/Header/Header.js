import React from 'react'
import './Header.scss'
import logo from '../../images/Bodar.png'
import arrow from '../../images/arrow.png'

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__nav">
          <div className="header__logo"><img src={logo} alt="" /></div>
        </div>

        <div className="header__info">
          <div className="header__text">Elevate Your Creations <br/> With AI-Driven <br/> Technology!</div>
          <div className='header__uppertext'>From generating complex algorithms to simple AI-<br/>driven tools, we offer cutting-edge </div>

            <div className="header__users">
              <span>Workflow With <br/> Custom AI Tools</span>

              <div className='header__users__info'>
                <div>
                  <h4>578M +</h4>
                  <span className='info__active'>User Active</span>
                </div>
              </div>
            </div>

            <div className="header__more">
              <div className="header__btns">
                <button className='header__btn_read'>Read More <img src={arrow} alt="" /></button>
                <button className='header__btn_learn'>Learn More <img src={arrow} alt="" /></button>
              </div>
              <div className="header__tech">
                123.4+ <br/> <h4>Technology</h4>
              </div>
              <div className="header__text-tech">
                Discover the Future of<br/> AI Innovation
              </div>
            </div>

            <div className="header__exp">
              <div className="header__exp__num">
                <h3>12+</h3>
                <span>Digital <br/> Experience</span>
              </div>

              <div className="header__exp_img"></div>

              <div className="header__exp__text">
                <span>Transform Ideas into Reality</span>
                <div>
                  <span>Power of AI at your Fingertips</span>
                  <span>AI Partner for Smarter</span>
                </div>
              </div>

            </div>
        </div>
      </div>
    </>
  )
}
