"use client";
import React, { useEffect, useState } from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

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
      toast.error('Please fill the fields');
      return;
    }

    if (id) {
      updateTask(id, data.title, data.description);
      toast.success('Task updated successfully');
    } else {
      createTask(data.title, data.description);
      toast.success('Task created successfully');
    }
    router.push('/');
  });

  return (
    <div className='flex justify-center items-center h-full'>
      <form onSubmit={onSubmit} className='bg-gray-700 p-10'>
        <input
          className='bg-gray-800 text-white py-3 px-4 mb-2 block focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full'
          placeholder='Write a title'
          {...register('title', { required: true })}
        />
        {errors.title && <span className='text-red-500 block mb-2'>This field is required</span>}

        <input
          className='bg-gray-800 text-white py-3 px-4 mb-2 block focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full'
          placeholder='Write a description'
          {...register('description', { required: true })}
        />
        {errors.description && <span className='text-red-500 block mb-2'>This field is required</span>}

        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm inline-flex items-center'
          type='submit'>
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default Page;