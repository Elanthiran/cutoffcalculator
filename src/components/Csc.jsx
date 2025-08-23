import React from 'react'
import { UseCutOff } from '../Context/StateContext'
import Card from './Card'
import "./card.css"
const Csc = () => {
    const{data}=UseCutOff()
 const csc=data.filter((item)=>item.course==="CSC")
  return (
    <div className='csc-container'>
      <h1 className='course'>computer science and communication</h1>
    <div className='first'>
        {
          csc.map((item,index)=>(
          <Card key={item.num || index} item={item} />
      ))
        }
    </div>
    </div>
  )
}

export default Csc