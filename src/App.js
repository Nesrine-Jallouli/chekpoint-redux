import './App.css';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NewTask />
     
     <TaskList />
    </div>
  );
}

export default App;