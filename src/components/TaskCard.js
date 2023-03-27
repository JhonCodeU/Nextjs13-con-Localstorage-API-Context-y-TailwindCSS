import React from 'react'
import { useRouter } from 'next/navigation';

const TaskCard = ({ id, title, description }) => {

  const router = useRouter();

  return (
    <div style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${id}`)}
    >
      <h1>{id} {title}</h1>
      <button>Delete</button>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;