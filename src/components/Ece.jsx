import React from 'react'
import { UseCutOff } from '../Context/StateContext'
import Card from './Card'
import "./card.css"
const Ece = () => {
    const{data}=UseCutOff()
 const ece=data.filter((item)=>item.course==="ECE")
  return (
    <div className='ece-container'>
      <h1 className='course'>Electronics and Communication Engineering.</h1>
    <div className='first'>
        {
          ece.map((item,index)=>(
          <Card key={item.num || index} item={item} />
      ))
        }
    </div>
    </div>
  )
}
export default Ece