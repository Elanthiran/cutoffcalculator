import React from 'react'
import { UseCutOff } from '../Context/StateContext'
import Card from './Card'
import "./card.css"

const Mech = () => {
    const{data}=UseCutOff()
 const mech=data.filter((item)=>item.course==="MECH")
  return (
    <div className='mech-container'>
<h1 className='course'>Mechanical Engineering</h1>
    <div className='first'>
        {
          mech.map((item,index)=>(
          <Card key={item.num || index} item={item} />
      ))
        }
    </div>
    </div>
  )
}

export default Mech
