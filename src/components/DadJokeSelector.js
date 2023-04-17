import OptionItem from "./OptionItem";
import './DadJokeDetail.css';

const DadJokeSelector = ({dadjokes, onDadJokeSelected}) => {

    const handleChange = function(event) {
        console.log(event.target.value)
        const chosenDadJoke = dadjokes[event.target.value];
        onDadJokeSelected(chosenDadJoke);
    }
    
    const dadjokeOptions = dadjokes.map((dadjoke, index) => {
      return <OptionItem key={index} dadjoke={dadjoke} index={index}/>
    })

    return (
        <select className="dropdown-menu" defaultValue="" onChange={handleChange}>
            <option value="" selected>SELECT A JOKE:</option>
            {dadjokeOptions}
        </select>
    )
}

export default DadJokeSelector; 