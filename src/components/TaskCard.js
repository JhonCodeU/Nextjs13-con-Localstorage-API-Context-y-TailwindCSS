import React from 'react'
import { useRouter } from 'next/navigation';
import { useTaskContext } from '../context/TaskContext';
import { toast } from 'react-hot-toast';

const TaskCard = ({ id, title, description }) => {

  const router = useRouter();
  const { deleteTask } = useTaskContext();

  return (
    <div style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${id}`)}
    >
      <h1>{id} {title}</h1>
      <button onClick={(e) => {
        e.stopPropagation,
          window.confirm('Are you sure you want to delete this task?') &&
          deleteTask(id)
        toast.success('Task deleted successfully');
      }}>Delete</button>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;