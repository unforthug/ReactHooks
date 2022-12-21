import React from 'react'
import MovieCard from './MovieCard';
import './movieList.css'

function Movielist({data}) {

  return (
    <div className='list'>
        {data.map((e)=>(<MovieCard data={e}/>))}
    </div>
  )
}

export default Movielist;
