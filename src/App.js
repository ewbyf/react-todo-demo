import './styles/App.css';
import Button from './components/Button';
import { useState } from "react";
import TodoList from './components/TodoList';
import TextInput from './components/TextInput';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodo([...todo, input]);
    }
  }

  return (
    <div className="main">
      <div className="add">
        <TextInput value={input} onChange={setInput}/>
        <Button onClick={addTodo}/>
      </div>
      <TodoList list={todo} setList={setTodo}/>
    </div>
  );
}

export default App;
