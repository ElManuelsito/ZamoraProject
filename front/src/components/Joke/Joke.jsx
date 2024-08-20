import axios from 'axios';
import React, { useState } from 'react'

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
    <div style={{textAlign: 'center', margin: 'auto'}}>
        <br />
        <h1><b>Wanna hear a joke?</b></h1>
        <br />
        <button style={{borderRadius: '12px', borderColor: '#1a8a72', color: '#1c3b5c', backgroundColor: '#c8e3de'}} onClick={getJoke}>{label}</button>
        <br />
        <br />
        <div style={{textAlign: 'justify', margin: 'auto'}}>
        </div>
        {/* <h4>{joke}ABCDDEJ THE QUICK BROWN DUMBASS JUMPS OVER THE OTHER LAZ FDSUCK FUCK WHATEVER JUSTFILL IT UP LUB IT UP 300 DOLLARS</h4> */}
        <h4>{joke}</h4>
        <br />
    </div>
  )
}
