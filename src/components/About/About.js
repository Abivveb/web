import React from 'react'
import './About.scss'
import { AboutAi } from './AboutAI/AboutAi'


export const About = () => {
  return (
    <div className="about">
      <div className="about__upper">
        <div className="about__upper__text">Revolutionize Your Workflow with <br/> Custom AI Tools</div>
        
        <div className="about__upper__content">

          <div className="about__upper__content__texts">
            <div className="about__upper__content__text">
              Build Smarter with AI <br/> Generators
            </div>

            <div className="about__upper__content__ads">
              <div className="about__upper__content__ad_one">
                <span>
                  Simplifying AI for Everyone
                </span>
              </div>

              <div className="about__upper__content__ad_two">
                <span>
                  Creations with AI-Driven Technology
                </span>
              </div>
            </div>
          </div>

          <div className="about__upper__content__bottom">
            <div className="about__upper__content__bottom__texts">
              <h4>From generating complex algorithms to simple AI-<br/>driven tools, we offer cutting-edge </h4>
              <div>
                <h2>57.42+</h2>
                <span>Build Smarter with AI <br/> Generators</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     <AboutAi/>  
    </div>
  )
}
