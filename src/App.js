import './App.css'
import {Container,Button} from 'react-bootstrap'
import React, {useEffect,useState} from 'react'
import axios from 'axios'

function App() {

  const [pokeList, setPokeList] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response=>{setPokeList(response.data.results)})
  }, [])

  return (
    <Container className='d-flex flex-column align-items-center mt-5'>
      <Button variant="secondary" className='mb-4'>Fetch Pokemon</Button>
      <ul>
        {pokeList.map((pokemon, idx) =>
        <li key={idx}>{pokemon.name}</li>)}
      </ul>
    </Container>
  );
}

export default App;
