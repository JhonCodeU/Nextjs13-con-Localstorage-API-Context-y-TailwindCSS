"use client";
import { useTaskContext } from '../context/TaskContext'
import TaskCard from '@/components/TaskCard';

function Page () {
  const { tasks } = useTaskContext()

  return (
    <div className='flex justify-center'>
      <div className='w-7/12'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Page