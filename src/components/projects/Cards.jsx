import React from 'react'
import './Cards.css'
import Card from './Card'


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
