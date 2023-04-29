import React from 'react';
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'; /*Se instaló primero un paquete con el comando npm install react-icons --save y cuando lo usamos, lo hacemos como un componente. Asignandole esa "clase" se ponen los estilos automaticamente. Ver en documentacion*/

/*la prop completada va a ser verdadero o falso para pasar de tarea no completada a completada.
completarTarea y eliminarTarea son dos funciones
El id será para que la funcion reconozca a la tarea especifica y la marque como completada en la lista de tareas. Lo mismo sucedera con la funcion elimiarTarea que se ejecutara cuando se haga click en el icono de cruz*/
function Tarea({ texto, completada, id, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto'
                  onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea;

/*Recordar que el evento onClick() lleva dentro una FUNCION por eso para usar la funcion completarTarea al hacerse el click, necesitamos ponerla dentro de una funcion anonima para que funcione */