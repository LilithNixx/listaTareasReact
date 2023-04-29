import React, { useState } from 'react';
import '../stylesheets/TareaFormulario.css'
import { v4 as uuidv4 } from  'uuid'; /*Se instalo el paquete con nmp install uuid */

function TareaFormulario(props) {
    
    const [input, setInput] = useState('');

    /*Actualizacion del input */
    const manejarCambio = e => {
        setInput(e.target.value);
    }
    
    /*Esta funcion se ejecutara cuando se intnte enviar el formulario con el evento onSubmit. En este momento el input ya se ha actualizado. Se crea un objeto tarea nueva con los datos ingresados */
    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        //??? viene de ListaDeTareas...
        props.onSubmit(tareaNueva);
    }
    
    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange= {manejarCambio}
            />
            <button className='tarea-boton'>
            Agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;

/*El evento onChange se dispara cuando ocurre un cambio en el valor del input. Entonces por cada letra que se ingrese o cambio que se realice en el input se llamara a la funcion manejarCambio*/