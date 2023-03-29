"use client";
import React, { useEffect, useState } from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {

  const [task, setTask] = useState({ title: '', description: '' });
  const { tasks, createTask, updateTask } = useTaskContext();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const taskFound = tasks.find((task) => task.id === id);
      if (taskFound) setTask(taskFound);
    }
  }, [id, tasks]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.title.trim() === '' && task.description.trim() === '') {
      alert('Please, fill all the fields');
      return;
    }

    if (id) {
      updateTask(id, task.title, task.description);
      console.log('update');
    } else {
      createTask(task.title, task.description);
    }
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder='Write a title'
        value={task?.title}
        onChange={handleChange}
      />
      <input name="description" placeholder='Write a description'
        value={task?.description}
        onChange={handleChange}
      />
      <button type='submit'>
        {id ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default Page;