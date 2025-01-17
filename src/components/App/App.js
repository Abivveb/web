import React from 'react'
import { Header } from '../Header/Header'
import './App.scss'
import { About } from '../About/About'
import { Footer } from '../Footer/Footer'
import { Services } from '../Services/Services'
import { Solutions } from '../Solutions/Solutions'

export const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__content">
          <Header/>
          <About/>
          <Services/>
          <Solutions/>
        </div>
        <Footer/>
      </div>
    </>
  )
}
