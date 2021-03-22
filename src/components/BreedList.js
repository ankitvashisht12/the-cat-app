import React from 'react'
import {Card} from 'semantic-ui-react'

const BreedList = ({setId, bData}) => {

  const breedData = bData.data;

  const breedClickHandler = (id) => {
    setId(id);
  }

  const items = breedData.map(e => {
    return <Card onClick={
        () => breedClickHandler(e.id)
      }
      style={
        {margin: '10px'}
      }
      key={
        e.id
    }>
      <Card.Content>
        <Card.Header>{
          e.name
        }</Card.Header>
      </Card.Content>
    </Card>
  });


  return (
    <> {items} </>
  )
}

export default BreedList
