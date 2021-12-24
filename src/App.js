import React,{useEffect, useState,useRef} from 'react';
import './App.css';

function App() {
  const [end,setEnd] = useState('');
  const [film,setFilm] = useState([]);
  const inputRef = useRef('')

  useEffect(() => {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/+${end}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": ""
      }
    })

    .then(response => {
      return response.json();
     })
     .then(data => {
      setFilm(data.titles)

    })  
  },[end])
const submitForm = (e) => {
  setEnd(inputRef.current.value)
  e.preventDefault()
}



  return (
    <div className="App">
      <div className="map">
      <form className='form' onSubmit={submitForm}>
        <input type="text" ref={inputRef}/>
        <button type='submit'>SUBMIT</button>
      </form>
      
      <div className="print">
        {film.map((item,index) => {
          return (
            <div key={index} className='container'>
              <div className="secondary">
              <img src={item.image} alt="image" />
              <p>{item.title}</p>
              </div>        
              </div>
            
            
          )
        })}
        </div>
      </div>
      
    </div>
  );
}

export default App;
