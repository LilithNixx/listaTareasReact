import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../stylesheets/ListaDeTareas.css';
import Tarea from '../componentes/Tarea';

function ListaDeTareas() {
    /*Lista de tareas: tendremos un arreglo de objetos*/
    const [tareas, setTareas] = useState([]);

    /*Para usar setTarea lo hacemos dentro de otra funcion */
    const agregarTarea = tarea => {
        //asegurarse que la tarea no este vacia
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            //agregar la tarea al principio del arreglo
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
           //comprobamos si la tarea fue completada o no para cambiar su estado
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            
            return tarea;
        });

        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map(
                        (tarea) => 
                        <Tarea
                            key={tarea.id}
                            id={tarea.id} 
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea= {eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;

/*cuando mostramos una lista para que React sepa el orden y no los cambie al actualizarlos, necesitamos pasar un atributo llamado key con el que React identifica el elemento en la lista */