import React, { useState } from 'react';
import './DadJokeDetail.css';

const DadJokeDetail = ({ dadjoke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  const handleButtonClick = () => {
    setShowPunchline(!showPunchline);
  };

  return (
    <div className='dadjoke-main'>
      <div className="dadjoke-setup">"{dadjoke.setup}"</div>
      {showPunchline && (
        <div className="dadjoke-punchline">"{dadjoke.punchline}"</div>
      )}
      <button className="punchline-button" onClick={handleButtonClick}>?</button>
    </div>
  );
}

export default DadJokeDetail;