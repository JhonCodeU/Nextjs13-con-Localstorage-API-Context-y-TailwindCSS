import React from 'react'
import { useRouter } from 'next/navigation';
import { useTaskContext } from '../context/TaskContext';
import { toast } from 'react-hot-toast';

const TaskCard = ({ id, title, description }) => {

  const router = useRouter();
  const { deleteTask } = useTaskContext();

  return (
    <div
      className="bg-gray-800 hover:bg-gray-600 text-white p-5 m-2 rounded-sm mb-4 cursor-pointer"
      onClick={() => router.push(`/edit/${id}`)}
    >
      <div className='flex justify-between'>
        <h1>{title}</h1>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm inline-flex items-center'
          onClick={(e) => {
            e.stopPropagation,
              window.confirm('Are you sure you want to delete this task?') &&
              deleteTask(id)
            toast.success('Task deleted successfully');
          }}>Delete</button>
      </div>
      <p>{description}</p>
      <span className="text-gray-400 text-sm">{id}</span>
    </div>
  );
}

export default TaskCard;