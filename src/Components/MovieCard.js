import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import './movieCard.css'
import { useNavigate } from 'react-router-dom';




function MovieCard({data}) {
  
  const navigate = useNavigate();
  return (
    
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.posterUrl} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.desription}
        </Card.Text>
<Rating name="read-only" value={data.rating} max={10}/>
        <Button variant="primary" onClick={()=>navigate(`/movie/${data.id}`)}>Go</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard;