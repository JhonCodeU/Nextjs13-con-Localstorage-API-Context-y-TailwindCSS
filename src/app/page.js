"use client";
import { useTaskContext } from '../context/TaskContext'
import TaskCard from '@/components/TaskCard';

function Page () {
  const { tasks } = useTaskContext()
  console.log(tasks)

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  )
}

export default Page