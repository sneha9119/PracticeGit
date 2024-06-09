import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='explore-menu'>
    <h1>Explore our Menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a wide range of cuisines, all delivered straight to your door. Whether you're craving Italian, Chinese, Mexican, or a healthy salad, our app offers something for everyone. Enjoy quick, reliable service and track your order in real-time. Satisfy your hunger with just a few taps!</p>
    <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-menu-list-item' key={index}>

                    <img className={category===item.menu_name?"active":""}src={item.menu_image}></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        
        })}
    </div>
    <hr></hr>
        </div>
  )
}

export default ExploreMenu
