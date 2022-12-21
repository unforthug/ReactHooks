
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Components/data';
import  Movielist  from './Components/Movielist';
import { useState } from 'react';
import Adding from './Components/Adding';
import Search from './Components/Search';


function App() {
  const [newData,setNewData] = useState(data)

  const AddingMovie=(newMovie)=>{
    setNewData([...newData,newMovie])
  }


const [movieName,setMovieName] = useState('')
const [ratingValue,setRatingValue] = useState(0)

console.log(movieName)
console.log(ratingValue)
  return (
    <div className="App">
      <Search ratingValue={ratingValue} setMovieName={setMovieName} setRatingValue={setRatingValue} />
      <Adding Adding={AddingMovie}/>
      <Movielist data={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(movieName) && el.rating>=ratingValue)}/>
    </div>
  );
}

export default App;
