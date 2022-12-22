import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data';
import ReactPlayer from 'react-player'


const Description = () => {
     
    let {id} = useParams();
    let myMovie = data.filter((el)=>el.id===id)
    
    

  return (

    <div><h1>This is a Description</h1>
    {myMovie && myMovie.map((el)=><div><h3>Read Description : </h3>
      <h2>{el.title.toUpperCase()}</h2>
      <h4>{el.desription}</h4>
      <h3>watch the trailer</h3>
      <h2>rating : {el.rating}</h2>
      <ReactPlayer url={el.videoUrl}/>
    </div>)}

    
    







    </div>
  )
}

export default Description