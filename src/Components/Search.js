
import { Form } from "react-bootstrap";
import { Rating } from "@mui/material";


function Search({setRatingValue,setMovieName,ratingValue}) {
  

const handleChangeName=(e)=>{
   setMovieName(e.target.value)
}


    return (<div>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Searching</Form.Label>
              <Form.Control
                type="search"
                name='search'
                placeholder="Enter Movie Title"
                onChange={handleChangeName}
                autoFocus
              />
            </Form.Group>
            <Rating
            name="rating"
            defaultValue={ratingValue}
            onChange={(event, newValue) => {
            setRatingValue(newValue);
             }}
           max={10}
            />
          </Form>
    </div>)
}
export default Search;