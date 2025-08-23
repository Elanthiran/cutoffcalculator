import React from 'react'
import { UseCutOff } from '../Context/StateContext'
import Card from './Card'
import "./card.css"
const Eee = () => {
    const{data}=UseCutOff()
 const eee=data.filter((item)=>item.course==="EEE")
  return (
    <div className='eee-container'>
    <h1 className='course'>Electrical and Electronics Engineering</h1>
 
    <div className='first'>

        {
          eee.map((item,index)=>(
          <Card key={item.num || index} item={item} />
      ))
        }
    </div>
    </div>
  )
}

export default Eee