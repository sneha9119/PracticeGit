import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
const Navbar = () => {

    const [menu,setmenu]=useState("menu");

  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
      <li className={menu==="home"?"active":""} onClick={()=>setmenu("home")}>home</li>
      <li className={menu==="menu"?"active":""} onClick={()=>setmenu("menu")}>menu</li>
      <li className={menu==="mobile-app"?"active":""} onClick={()=>setmenu("mobile-app")}>mobile-app</li>
      <li className={menu==="contact-us"?"active":""} onClick={()=>setmenu("contact-us")}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}></img>
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon}></img>
            <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar

