import React from 'react'
import './Services.scss'
import { ServicesContent } from './ServicesContent/ServicesContent'

export const Services = () => {
  return (
   <>
    <div className="services">
      <div className="services__upper-text">
        <h3>
          Discover the Future of AI Innovation
        </h3>
        <h4>From generating complex algorithms to simple AI-driven tools, we <br/> offer cutting-edge solutions that cater to every need. Whether you’re a developer, entrepreneur</h4>
      </div>
      <div className="services__main">
          <div className="services__img"></div>

          <div className="services__wrapper">
            
            <div className="services__info">
              <span className="services__tech">
                  <div className="services__ads">
                      <div className="services__ad_one">
                        <span>
                          Simplifying AI for Everyone
                        </span>
                      </div>

                      <div className="services__ad_two">
                        <span>
                          AI Generator Platform
                        </span>
                    </div>
                  </div>
                    <div className="services__tech__text">
                      Empower Your Vision with AI Technology
                    </div>
                    <div className="services__tech__bottom-text">
                      From generating complex algorithms to simple AI-driven tools, we offer cutting-<br/>edge solutions that cater to every need.
                    </div>
              </span>
              <div className="services__img_small"></div>
            </div>
              <ServicesContent/>
          </div>
      </div>
    </div>
   </>
  )
}
