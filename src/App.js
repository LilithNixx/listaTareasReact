import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="app-tareas">
      <h1>Creador de tareas</h1>
      <div className='tareas-lista-principal'>
          <h2>Mis tareas</h2>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
