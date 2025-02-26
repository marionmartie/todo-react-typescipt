import { Tasks } from "../types"
import { FC } from "react"
import { RxCrossCircled } from "react-icons/rx"

interface AllTasksProp {
    item: Tasks;
    deleteTask: (id: string) => void;
}


const AllTasks: FC<AllTasksProp> = ({ item, deleteTask }) => {
    const eventDeleteTask = (id: string) => {
        deleteTask(id)
    }

    return (
        <li className="list-disc ps-4 flex items-center gap-4">
            {item.text}
            <button onClick={() => eventDeleteTask(item.id)}>
                <RxCrossCircled />
            </button>
        </li>
    )
}

export default AllTasks