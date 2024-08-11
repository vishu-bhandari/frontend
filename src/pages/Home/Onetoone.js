import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Intro from './one-to-one/Intro'
import OneAbout from './one-to-one/OneAbout'
import OneContent from './one-to-one/OneContent'
import OneTest from './one-to-one/OneTest'
import Onebanner from './one-to-one/Onebanner'
import LeftSider from './LeftSider'
import EmpowerFaq from './one-to-one/EmpowerFaq'

function Onetoone() {
  return (
    <>
    <Header/>
    <Intro/>
    <OneAbout/>
    <OneContent/>
    <OneTest/>
    <Onebanner/>
    <EmpowerFaq/>
    
    <Footer/>
    <LeftSider/>


    </>
  )
}

export default Onetoone