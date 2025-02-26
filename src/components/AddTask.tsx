import { FaPlusCircle } from "react-icons/fa"
import { Tasks } from "../types";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ChildProp {
    addTask: (newTask: Tasks) => void;
}

const AddTask: React.FC<ChildProp> = ({addTask}) => {
    const [task, setTask] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleNewTask = () => {
        setErrorMessage('')
        
        if ( !task ) {
            setErrorMessage('Please enter a task!')
            return
        }

        const newTask: Tasks = {
            id: uuidv4(),
            text: task,
            completion: false
        }
        addTask(newTask)
    }

    return (
        <>
            <div className="flex gap-2 items-center justify-center">
                <input required value={task} onChange={(e) => setTask(e.target.value)} className="border-1 rounded border-black p-2" type="text" />
                <button onClick={() => handleNewTask()} className="inline-flex gap-1 items-center rounded bg-blue-300 p-2">
                    <FaPlusCircle />
                    Add Task
                </button>
            </div>
            { errorMessage && <p className="text-red-500 text-center">{ errorMessage }</p> }
        </>
    )
}

export default AddTask;