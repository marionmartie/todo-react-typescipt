import { FaPlusCircle } from "react-icons/fa"
import { Tasks } from "../types";
import { useState } from "react";

interface ChildProp {
    addTask: (newTask: Tasks) => void;
}

const AddTask: React.FC<ChildProp> = ({addTask}) => {
    const [task, setTask] = useState<string>('')

    const handleNewTask = () => {
        const newTask: Tasks = {
            id: 1,
            text: task,
            completion: false
        }
        addTask(newTask)
    }

    return (
        <div className="flex gap-2 items-center justify-center">
            <input value={task} onChange={(e) => setTask(e.target.value)} className="border-1 rounded border-black p-2" type="text" />
            <button onClick={() => handleNewTask()} className="inline-flex gap-1 items-center rounded bg-blue-300 p-2">
                <FaPlusCircle />
                Add Task
            </button>
        </div>
    )
}

export default AddTask;