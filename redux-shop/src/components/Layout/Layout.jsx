import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Navmenu from '../Navmenu/Navmenu';

const Layout = () => {
  return (
    <>
     <Header/>
     <Navmenu/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;