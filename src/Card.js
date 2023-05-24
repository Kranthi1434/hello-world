import React from 'react'
import { Cards } from './CardDetails'
import {useState} from 'react'


let details = Cards;
console.log(details)

const Card = () => {
  const [first, setfirst] = useState(details)
  return (
    <>
    {/* style={{display:'flex', gap:'20px'}} */}
   {
    first.map((u,id)=>{
      return(
    <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
       <h3>id:{id}</h3>
       <h3>name:{u.name}</h3>
    </div>
      )     
    })
   }
    </>
  )
}

export default Card