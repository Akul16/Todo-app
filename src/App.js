import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React ,{ useState , useEffect} from 'react';


function App() {
  const [inputText,setInputText] = useState('')
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filteredTodos,setFilteredTodos] =useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos,status])

  const filterHandler = () => {
    switch(status){
      case'completed':
        setFilteredTodos(todos.filter(todo => todo.completed ===true))
      break;

      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed ===false))
      break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>My Todo List </h1>
      </header>
      <div>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
          />
      </div>
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
      
    </div>
  );
}

export default App;
