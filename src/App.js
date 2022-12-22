
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Components/data';
import  Movielist  from './Components/Movielist';
import { useState } from 'react';
import Adding from './Components/Adding';
import Search from './Components/Search';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [newData,setNewData] = useState(data)

  const AddingMovie=(newMovie)=>{
    setNewData([...newData,newMovie])
  }


const [movieName,setMovieName] = useState('')
const [ratingValue,setRatingValue] = useState(0)
 console.log(data);

  return (
    <div className="App">
      <Search ratingValue={ratingValue} setMovieName={setMovieName} setRatingValue={setRatingValue} />
      <br/>
      <Adding Adding={AddingMovie}/>
      <br/>
      <br/>
      <Movielist data={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(movieName) && el.rating>=ratingValue)} />
      
      {/* <Routes>
         <Route path='/' element={<Search ratingValue={ratingValue} setMovieName={setMovieName} setRatingValue={setRatingValue} />}/>
         <Route path='/' element={<Adding Adding={AddingMovie}/>} />
         <Route path='/' element={<Movielist data={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(movieName) && el.rating>=ratingValue)} />}/>
      </Routes> */}
    </div>
  );
}

export default App;
