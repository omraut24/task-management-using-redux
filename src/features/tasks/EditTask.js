import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editTask } from "./taskSlice"

const EditTask = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, details, date, time, status } = existingUser[0];
  const [values, setValues] = useState({
    name,
    details,
    date,
    time,
    status
  });


  const handleEditTask = () => {
    setValues({ name: '', details: '', date: '', time: '', status:'' });
    dispatch(editTask({
      id: params.id,
      name: values.name,
      details: values.details,
      date: values.date,
      time: values.time,
      status: values.status
    }));
    navigate('/');
  }

  return (
    <div className="addContainer">
    <TextField
      label="Name:"
      value={values.name}
      onChange={(e) => setValues({ ...values, name: e.target.value })}
      inputProps={{ type: 'text', placeholder: 'Task Name' }}
    />
    <br />
    <input value={values.date} onChange={(e) => setValues({ ...values, date: e.target.value })} type="date" className="date-input"/>
    
    <input value={values.time} onChange={(e) => setValues({ ...values, time: e.target.value })} type="time" className="time-input"/>

    <TextField
      label="Details:"
      value={values.details}
      onChange={(e) => setValues({ ...values, details: e.target.value })}
      inputProps={{ type: 'text', placeholder: 'Details' }}
    />

    <TextField
      label="Status:"
      value={values.status}
      onChange={(e) => setValues({ ...values, status: e.target.value })}
      inputProps={{ type: 'text', placeholder: 'Status' }}
    />
      <Button onClick={handleEditTask}>Edit</Button>
    </div>
  )
}

export default EditTask;