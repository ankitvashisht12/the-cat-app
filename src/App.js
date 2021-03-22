import React, {useState} from 'react';
import {
  Container,
  Grid,
  // Input,
  Header,
  Dimmer,
  Loader,
  GridColumn
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {useQuery} from 'react-query';
import {getBreedList} from './utils/getBreedList';
import BreedList from './components/BreedList';
import Cats from './components/Cats';


function App() {

  const [id, setId] = useState('');

  const {data, status} = useQuery('breeds', getBreedList);
  console.log('main data', data, status);

  return (
    <>
      <Container className='brand-container' text>
        <Header className='brand-text' as='h1'>The Cat APP 🐱 : Million Dollar Startup 🤑</Header>
      </Container>
      {/* <Input style={
          {
            margin: '10px',
            display: 'flex',
            justifyContent: 'center'
          }
        }
        type='text'
        placeholder='Search Here by Breed'/> */}
      <Grid>
        <GridColumn width='5' className='breeds-container'>
          {
          status === 'success' ? <BreedList setId={setId}
            bData={data}/> : <Dimmer active inverted><Loader inverted/></Dimmer>
        } </GridColumn>
        <GridColumn width='11'>
          <Cats id={id}/>
        </GridColumn>
      </Grid>
    </>
  );
}

export default App;
