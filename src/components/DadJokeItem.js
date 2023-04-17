import React from 'react';
import './ListItem.css';

const DadJokeItem = ({dadjoke, onDadJokeClicked}) => {

  const handleClick = function() {
    console.log(`Clicked on ${dadjoke.setup}`);
    onDadJokeClicked(dadjoke);
  }

  return (
    <li onClick={handleClick} className="clickable-li">{dadjoke.setup}</li>
  )
}

export default DadJokeItem;