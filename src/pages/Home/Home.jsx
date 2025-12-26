import React from 'react'
import Header from '../../components/Header';
import Intro from './Intro';
import Skill from './Skill';
import Experiences from './Experiences';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';
import ContactMe from './ContactMe';

function Home() {
  return (
   
    <>  
    <div className=''>
      <Header/>
      <Intro/>
      <Skill/>
      <Education/>
      <Experiences/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
    
    </>
  )
}

export default Home;