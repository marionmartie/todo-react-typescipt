import AddTask from "./components/AddTask"
import { useState } from "react"
import { Tasks } from "./types"

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  const handleNewTask = (task: Tasks) => {
    console.log(task);
    return
  }
  return (
    <>
      <AddTask addTask={handleNewTask} />      
    </>
  )
}

export default App
