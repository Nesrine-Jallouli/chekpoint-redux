import React, { useState , useSelector} from "react";
import './App.css';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "./components/Filter"
function App() {

   const [filtered, setFiltered] = useState([]); 
   const [status, setStatus] = useState("all");
  return (
    <div className="App">
     <NewTask />
     <Filter
        filtered={filtered}
        setFiltered={setFiltered}
        status={status}
        setStatus={setStatus}
      />
     <TaskList status={status} filtered={filtered}/>
    </div>
  );
}

export default App;