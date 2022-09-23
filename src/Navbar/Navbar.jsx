import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGifts, faHandPointRight, faHeadset, faPizzaSlice, faShop, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import headLogo from '../Components/image/waaaoo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
    <div className='nav_container'>
    <div className='navList'>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faPizzaSlice} />
    <NavLink to='/' className='home_heder'><span>Home</span></NavLink> 
    </div>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faShop} />
    <span >Retails</span>
    </div>
   
    <div className='navListItem'>
   <FontAwesomeIcon icon={faComment} />
    <span >Stories</span>
    </div>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faGifts} />
    <span >GiftCard</span>
    </div>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faVideoCamera} />
    <span >Blog</span>
    </div>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faHandPointRight} />
    <span >Add To Cart</span>
    </div>
    <div className='navListItem'>
   <FontAwesomeIcon icon={faHeadset} />
    <span >ConTact</span>
    </div>
 </div>
 <h1 className='haedTitle'> A Greate Discount Offers......Hurry Now !!!</h1>
 <p className='headPara'> Get rewarded for your Orders - Unlock instant savings and enjoy the fantastic meal.</p>
 <button className='headbtn' >Order Now</button>
    </div>
    <img src={headLogo} alt='headLogo' />

    </div>
  )
}

export default Navbar