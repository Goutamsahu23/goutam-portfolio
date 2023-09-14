import React from 'react'
import './Cards.css'
import Card from './Card'
import { motion } from 'framer-motion'

const Cards = ({ProjectData}) => {

 
  return (
    <div className='cards'>
      

        {
                ProjectData.map((Project)=>{
                    return <Card key={Project.id} {...Project} ></Card>
                })
            }
        
    </div>
  )
}

export default Cards
