import './App.css';
import image from './note.png';
import imageTwo from './plan.jpg';
import { TodoList } from './TodoList';


function App() {
  return (
    <div className='app'>

    <div className="container">
      <img src={ image } alt='heart' width='120px'/>
    </div>

    <div className="container">
    <h1>Todo List</h1>
    </div>

    <TodoList/>

    <div className="container">
      <img src={ imageTwo } alt='plan' width='400px'/>
    </div>

  </div>
  );
}

export default App;
