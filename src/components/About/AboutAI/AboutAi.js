import React from 'react'
import './AboutAi.scss'
import arrow from '../../../images/arrow.png'

export const AboutAi = () => {
  return (
    <>
    <div className="about_ai">

      <div className="about_ai__left-info">
        <div className='about_ai__upper-text'>
          <h4>Workflow With Custom <br/>AI Tools</h4>
          <h5>Our Techology AI Generator empowers <br/> individuals and businesses</h5>
        </div>
        <div className="about_ai__img-small"></div>
        <div className="about_ai__text">
          <div className="about_ai__tech">
                  123.4+ <br/> <h4>Technology</h4>
                </div>
                <div className="about_ai__text-tech">
                  Discover The Future Of<br/> AI Innovation
                </div>
          </div>
        <div className="about_ai__btns">
            <button className='about_ai__btn_read'>Read More <img src={arrow} alt="" /></button>
            <button className='about_ai__btn_learn'>Learn More <img src={arrow} alt="" /></button>
        </div>
      </div>


      <div className="about_ai__right-info">
        <div className="about_ai__main-text">Your AI Partner for Smarter <br/>Faster Solutions</div>
        <div className="about_ai__img"></div>
        {/* Создай элементы с блюром */}
      </div>
    </div>
    </>
  )
}
