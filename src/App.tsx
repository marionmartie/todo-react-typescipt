import AddTask from "./components/AddTask"
import { useState, FC } from "react"
import { Tasks } from "./types"
import AllTasks from "./components/AllTasks"


function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  const handleNewTask = (task: Tasks) => {
    setTasks([
      ...tasks,
      task
    ])
    return
  }

  const handleDeleteTask = ( id: string ) => {
    console.log(id);
    return
  }

  return (
    <>
      <AddTask addTask={handleNewTask} />

      <ul className="list-disc ps-4">
        {
          tasks.map(el => {
            return (
              <AllTasks deleteTask={handleDeleteTask} key={el.id} item={el} />
            )
          })
        }
      </ul>

    </>
  )
}

export default App
