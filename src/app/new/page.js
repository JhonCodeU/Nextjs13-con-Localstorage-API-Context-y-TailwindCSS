"use client";
import React, { useEffect, useState } from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const Page = ({ params }) => {

  const { tasks, createTask, updateTask } = useTaskContext();
  const router = useRouter();
  const { id } = params;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (id) {
      const taskFound = tasks.find((task) => task.id === id);
      if (taskFound) {
        setValue('title', taskFound.title);
        setValue('description', taskFound.description);
      }
    }
  }, [id, tasks, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (data.title.trim() === '' && data.description.trim() === '') {
      alert('Please, fill all the fields');
      return;
    }

    if (id) {
      updateTask(id, data.title, data.description);
    } else {
      createTask(data.title, data.description);
    }
    router.push('/');
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Write a title'
        {...register('title', { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <input
        placeholder='Write a description'
        {...register('description', { required: true })}
      />
      {errors.description && <span>This field is required</span>}

      <button type='submit'>
        {id ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default Page;