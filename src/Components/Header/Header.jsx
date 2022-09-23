import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logoimg from '../image/pizzosmain.png' 
import emptycart from '../image/empcart.gif'

import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom';
import { DLT } from '../../redux/Actions/action';



const Header = () => {

  const [price, setPrice]=useState(0);
  const getdata=useSelector((state)=>state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id)=>{
dispatch (DLT (id))
  }

  const total =()=>{
    let price = 0;
    getdata.map((ele,key)=>{
      price = ele.price * ele.minquan + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])
  return (
    <>
      <div className='header'>
    <div className='headeContaner'>
        <img src={Logoimg} alt='logoimg' className='logoImg' />
    </div>   <div className='headListItem'>
    <Badge badgeContent={getdata.length} color="primary"   id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}><FontAwesomeIcon icon={faCartShopping} />  </Badge>
    <span >Cart</span>
    </div>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {
        getdata.length ? 
        <div className='card_details' style={{width:'24rem', padding:10 }}>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Item Name</th>
              <th>Resturant Name</th>
            </tr>
          </thead>
          <tbody>
            {
              getdata.map((e)=>{
                return(
                  <>
                    <tr>
                      <td>
                       <NavLink to={`/card/${e.id}`} onClick={handleClose}><img src={e.imgdata} style={{width:'100px', height:'100px'}} alt='cartImg'/></NavLink> 
                      </td>
                      <td>
                        <p>{e.name}</p> <br/>

                      
                      </td>
                      <td>
                        <p>{e.native}</p>
                      <p>Price: <span><strong>₹{e.price}</strong></span></p>
                      <p>Quantity: {e.minquan}</p>
                      <p style={{color:'red', fontSize:20, cursor:'pointer'}} onClick={()=>dlt(e.id)}><i className='fas fa-trash smalltrash'></i></p>
                      </td>
                      <td >
                      <p style={{color:'red', fontSize:20, cursor:'pointer'}} onClick={()=>dlt(e.id)}><i className='fas fa-trash largetrash'></i></p>
                      </td>
                    </tr>
                 
                  </>
                )
              })
            }
            <p><strong>Total:</strong>₹ {price}</p>
          </tbody>
        </Table>

        </div>:<div className='card_details d-flex justify-content-center align-item-center'style={{width:"24rem", padding:10, position:"relative"}}>
      <i className='fas fa-close smallclose' 
      onClick={handleClose}
      style={{position:"absolute",top:2,right:20,fontSize:23, cursor:"pointer" }}></i>
        <p style={{fontSize:20}}>Your Cart is Empty </p>
        <img src={emptycart} alt='' className='emptycart_img' style={{width:"7rem"}} />
      </div>
      }
      
      </Menu>
    <div className='headItems'>
        <button className='headButton'>Register</button>
        <button className='headButton'>Login</button>
    </div>
      </div>       
    </>
  )
}

export default Header