import React from 'react';
import DadJokeItem from './DadJokeItem';

const DadJokeList = ({dadjokes, onDadJokeClicked}) => {

    const dadjokeItems = dadjokes.map((dadjoke, index) => {
      return <DadJokeItem dadjoke={dadjoke} key={index} onDadJokeClicked={onDadJokeClicked}/>
    })

  return (
    <div>
    <ul>
      {dadjokeItems}
    </ul>
  </div>
  )
}

export default DadJokeList;