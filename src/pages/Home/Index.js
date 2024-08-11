import React from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'
import Products from './Products'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Videos from './Videos'
import LeftSider from './LeftSider'
import Footer from '../../Components/Footer'
import Work from './Work'
import { useSelector } from 'react-redux'
import ScrollToTopButton from './ScrollToTopButton'
import Accordion from './Accordion'
import AutomaticPopup from '../../Components/AutomaticPopup'

function Home() {
  const {portfolioData} = useSelector((state)=>state.root);
  return (
    <>
    <div>
        {/* <Header/> */}
        <ScrollToTopButton/>
        <Intro/>
        <AutomaticPopup/>
        <About/>
        <Products/>
        <Testimonials/>
        <Work/>
        <Accordion/>
        <Videos/>
        <Contact/>
       <Footer/>
        <LeftSider/>

    </div>
    </>
  )
}

export default Home