// ejemplo de setState:

import React, { useState } from 'react'

export const Contador = () => {

    // Declara una variable de estado llamada "contador" y una función para actualizarla llamada "setContador"
    const [contador, setContador] = useState(0); // 0 es el valor inicial

    // Funcion para manejar el clic del boton
    const incrementar = () => {
        setContador(contador + 1)
    };


    return (
        <>
        {/* <p>contador: {contador}</p> */}
        {/* <button onclick incrementar={incrementar}</button>*/}
        </>
    )
}