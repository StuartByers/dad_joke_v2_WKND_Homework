import React, { useState, useEffect } from 'react';
import DadJokeList from '../components/DadJokeList';
import DadJokeSelector from '../components/DadJokeSelector';
import DadJokeDetail from '../components/DadJokeDetail';
import './DadJokeContainer.css';


const DadJokeContainer = () => {
    const [dadjokes, setDadJokes] = useState([]);
    const [selectedDadJoke, setSelectedDadJoke] = useState(null);

    useEffect(() => {
      getDadJokes();
    }, [])

    const getDadJokes = function(){
        fetch('https://official-joke-api.appspot.com/jokes/ten')
        .then(res => res.json())
        .then(dadjokes => setDadJokes(dadjokes))
    }

    const onDadJokeClicked = function(dadjoke) {
        setSelectedDadJoke(dadjoke);
    }

    const onDadJokeSelected = function(dadjoke){
        setSelectedDadJoke(dadjoke);
    }

    return (
        <div className="main-container">
            <DadJokeSelector dadjokes={dadjokes} onDadJokeSelected={onDadJokeSelected} />
            {selectedDadJoke ? <DadJokeDetail dadjoke={selectedDadJoke}/> : null}
        </div>
    )
}

export default DadJokeContainer;
