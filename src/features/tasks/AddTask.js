import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addTask } from "./taskSlice"

const AddTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        details: '',
        date: '',
        time: '',
        status: ''
    });

    const handleAddTask = () => {
        setValues({ name: '', details: '', date: '', time: '', status:''});
        dispatch(addTask({
        id: uuidv4(),
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
                label="Task Name:"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Task name' }}
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
        
        <Button onClick={handleAddTask}>Submit</Button>
        </div>
    )
}

export default AddTask;