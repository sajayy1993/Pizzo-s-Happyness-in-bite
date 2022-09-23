import React, { useEffect, useState } from 'react'
import './card.css'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../redux/Actions/action';
import { ADD } from '../../redux/Actions/action';
import { RMV } from '../../redux/Actions/action';

const CardDetails = () => {

  const [data , setData] = useState([])

   const {id} = useParams();
  //  console.log(id)

  const history = useNavigate ();

  const dispatch= useDispatch();
   
   const getdata=useSelector((state)=>state.cartreducer.carts);
  //  console.log(getdata);

    const compare = ()=>{
      let compareData = getdata.filter((e)=>{
        return e.id == id
      });
      setData(compareData)
    }

    // add data
    const send =(e)=>{
      // console.log(e)
      dispatch(ADD(e));
        }
      

    const dlt =(id)=>{
      dispatch(DLT(id))
      history("/")
    }

    const removeone =(item)=>{
      dispatch(RMV(item))
    }

    useEffect(()=>{
      compare();
    },[id])

  return (
    <>
        <div className='container mt-3 mb-5'>
            <h2 className='text-center'>Item Details</h2>
      
        <section className='container mt-4'>
          <div className='itemsdetails'>
          {
            data.map((item)=>{
              return(
                <>
                <div className='imgdiv'>
          <img src={item.imgdata} alt='detailsimg' className='imgitem'/>
        </div>
        <div className='details'>
         <Table>
            <tr>
                <td>
                    <p><strong>Resturant :</strong> {item.name}</p>
                    <p><strong>Price :</strong> ₹ {item.price}</p>
                    <p><strong>Dishes :</strong> {item.native}</p>
                    <p><strong>Total :</strong> ₹ {item.price * item.minquan}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:'pointer',background:'#ddd', color:'#111'}}>
                      <span style={{fontSize:24}} onClick={item.minquan<=1 ? ()=>dlt(item.id): ()=>removeone(item)}>-</span>
                      <span style={{fontSize:22}}>{item.minquan}</span>
                      <span style={{fontSize:24}} onClick={()=>send(item)}>+</span>
                    </div>
                </td>
                <td>
                    <p><strong>Rating :</strong><span style={{background:'green', color:'white', padding:'2px 5px',borderRadius:'5px', marginLeft:'2px',justifyContent:'center', alignItems:'center'}}>{item.rating} ★</span></p>
                    <p><strong>Order Review :</strong><span style={{ padding:'2px 5px',borderRadius:'5px', marginLeft:'2px',justifyContent:'center', alignItems:'center'}}>1178 + Order placed recently</span></p>
                    <p><strong>Delete :</strong><span > <i className='fas fa-trash'style={{color:'red', cursor:'pointer' }} onClick={()=>dlt(item.id)}></i></span></p>
                </td>
            </tr>
         </Table>
        </div>
                </>
              )
            })
          }
         
        </div>
        </section>
        </div>
    </>
  )
}

export default CardDetails