import React from 'react'
import "./style.css";
import NavBar from '../../components/NavBar/NavBar';
import BannerHome from './components/BannerHome';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar/>
     <BannerHome/>
     <Footer/>
    </>
  )
}

export default Home
