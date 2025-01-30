import React from 'react'
import "./style.css";
import NavBar from '../../components/NavBar/NavBar';
import BannerHome from './components/BannerHome';
import Footer from '../../components/Footer/Footer';
import Listings from './components/Listings';
import Store from './components/Store';
import HowToRent from './components/HowToRent';

const Home = () => {
  return (
    <>
     <NavBar/>
     <BannerHome/>
     <Listings/>
     <Store/>
     <HowToRent/>
     <Footer/>
    </>
  )
}

export default Home
