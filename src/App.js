import { Routes, Route } from 'react-router-dom';
import './App.css';
import TodoCard from './components/TodoCard';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<TodoList />} />
       <Route path='/user/:id' element={<TodoCard />} />
     </Routes>
    </div>
  );
}

export default App;
