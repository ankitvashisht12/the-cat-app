import React from 'react'
import {useQuery} from 'react-query';
import {
  Icon,
  Card,
  Image,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import {getBreed} from '../utils/getBreed';

const Cats = (id) => {

  const {data, status} = useQuery('catBreed', () => getBreed(id.id))


  console.log(data)

  let info = [];
  info.push({
    name: 'Unknown',
    origin: 'Unknown',
    description: 'Unknown',
    wikipedia_url: 'https://st3.depositphotos.com/1229718/16738/i/450/depositphotos_167382222-stock-photo-404-error-with-a-kitten.jpg',
    reference_image_id: '0XYvRd7oD'
  })

  if (data && data.data.length > 0) 
    info = data.data


  


  return (
    <> {

      status === 'success' ? <Card style={
        {
          display: 'flex',
          margin: '10px',
          justifyContent: 'center'
        }
      }>
        <Image src={
            `https://cdn2.thecatapi.com/images/${
              info[0].reference_image_id
            }.jpg`
          }
          wrapped
          ui={false}/>
        <Card.Content>
          <Card.Header>{
            info[0].name
          }</Card.Header>
          <Card.Meta>{
            info[0].origin
          }</Card.Meta>
          <Card.Description>{
            info[0].description
          }</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={
            info[0].wikipedia_url
          }>
            <Icon name='wikipedia w'/>
            Read Here
          </a>
        </Card.Content>
      </Card> : <Dimmer active inverted>
        <Loader inverted/>
      </Dimmer>
    } </>
  )
}

export default Cats
