import React from 'react'
import './ServicesContent.scss'
import contentIcon from '../../../images/activity_zone.png'

export const ServicesContent = () => {
  return (
    <>
        <div className="services_content">
            <div className="services_content__icon">
                <img src={contentIcon} alt="" />
            </div>
            <div className="services_content__info">
                <div className="services_content__text">
                    <h3>Innovate Faster with Our AI <br/>Generator Platform</h3>
                    <span>From generating complex algorithms to simple <br/>AI-driven tools, we offer cutting-edge</span>
                </div>
                <div className="services_content__exp">
                    <h2>12+</h2>
                    <h4>Digital Experience</h4>
                </div>
            </div>
        </div>
    </>
  )
}
