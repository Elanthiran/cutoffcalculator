import React from 'react'
import { UseCutOff } from '../Context/StateContext'
import Card from './Card'
import "./card.css"
const Civil = () => {
    const{data}=UseCutOff()
 const civil=data.filter((item)=>item.course==="CIVIL")
  return (
    <div className='civil-container'>
    <h1 className='course'>Construction Investigation And Various Information Levelling</h1>
    <div className='first'>
        {
          civil.map((item,index)=>(
          <Card key={item.num || index} item={item} />
      ))
        }
    </div>
    </div>
  )
}

export default Civil