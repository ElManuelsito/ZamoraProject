import axios from 'axios';
import React, { useState } from 'react'
import './Joke.css'

export const Joke = () => {

    const [joke, setJoke] = useState("");
    const [label, setLabel] = useState("Yes");
    
    const getJoke = async () => {
        try {
            // axios.get("https://v2.jokeapi.dev/joke/Programming").then(
            //     (response) => {
            //         console.log(response)
            //     }
            // );
            const response = await axios.get("https://v2.jokeapi.dev/joke/Programming");
            console.log(response.data);
            switch (response.data.type) {
                case "single":
                    setJoke(response.data.joke)
                    break;
                case "twopart":
                    setJoke(response.data.setup + "\n" + response.data.delivery)
                    break;
                default:
                    return console.warn("something went wrong in the switch statement, response's type: " + response.data.type)
            }
            return setLabel("Another one pls")
        } catch(error) {
            console.error(error)
        }
    };

  return (
    <div className='center-j'>
        <br />
        <h1><b>Wanna hear a joke?</b></h1>
        <br />
        <button className='button-j' onClick={getJoke}>{label}</button>
        <br />
        <br />
        <div className='justify-j'>
        </div>
        <h4>{joke}</h4>
        <br />
    </div>
  )
}
