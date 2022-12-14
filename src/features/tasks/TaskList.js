import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteTask } from "./taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveTask = (id) => {
    dispatch(deleteTask({ id }));
  }

  const renderCard = () => users.map(user => (
    <div className="listContainer" key={user.id}>
      <div className="Data">
        <div className="data1">
          <h3 className="h3">{user.name}</h3>
        </div>
        <span className="spanContainer">{user.details}</span>
        <div className="data1">
          <h3 className="task-list-date">{user.date}</h3>
          <h3 className="task-list-time">{user.time}</h3>
        </div>
        <div className="task-list-status">{user.status}</div>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-task/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveTask(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-task"><Button>Add Task</Button></Link>
      <div className="List">
        {users.length ? renderCard() : <p className="notFound">No Data Found</p>}
      </div>
    </div>
  )
}

export default TaskList;