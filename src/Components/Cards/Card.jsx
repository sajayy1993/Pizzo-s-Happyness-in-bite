import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carddata from './CardData.json'
import {useDispatch} from 'react-redux'
import { ADD } from '../../redux/Actions/action'
import './card.css'


const Cards = () => {
 
  const[data, setData]=useState(Carddata);

  const dispatch = useDispatch();

  const send =(e)=>{
// console.log(e)
dispatch(ADD(e));
  }

  return (
    <>
  <div className='container mt-3 '>
  <h2 className='text-center'>Our Menu</h2>
  <div className='row mt-4 justify-content-center align-item-center'>
  
  {
    data.map((item,id)=>{
      return(
        <>
        <Card style={{ width: '21rem',border:'none'}} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src={item.imgdata} style={{height:'250px'}} className='mt-4'/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.native}
        </Card.Text>
        <h5>₹{item.price}</h5>
        <p>rating:⭐{item.rating}</p>
        <div className='Gobtn d-flex justify-content-center'>
        <Button variant="primary" 
        onClick={()=>send(item)}
        >Add to Cart</Button>
        </div>

      </Card.Body>
    </Card>
        </>
      )
    })
  }
  
  </div>
  </div>
    </>
    
  )
}

export default Cards