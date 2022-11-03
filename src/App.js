import { Route, Routes } from "react-router-dom";
import AddTask from "./features/tasks/AddTask";
import EditTask from "./features/tasks/EditTask";
import TaskList from "./features/tasks/TaskList";

function App() {
  return (
    <div className="container">
      <h1 className="containerText">Daily tasks management using React JS Redux</h1>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;
