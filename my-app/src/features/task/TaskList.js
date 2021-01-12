import React, { useEffect } from 'react'
import styles from "./TaskList.module.css";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { fetchAsyncProf } from "../login/loginSlice";
import { fetchAsyncGet, selectTasks } from "./taskSlice"


const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const disptch = useDispatch();

    useEffect(() => {
        const fetchTaskProf = async() => {
            await disptch(fetchAsyncGet());
            await disptch(fetchAsyncProf());
        };
        fetchTaskProf();
    },[disptch])

    return (
        <div>
            <ul className={styles.taskList}>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}

export default TaskList
