"use client";
import { createContext, useContext } from 'react';

const TaskContext = createContext();

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

const TaskProvider = ({ children }) => {

  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
    },
  ];

  return (
    <TaskContext.Provider
      value={{ tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { useTaskContext, TaskProvider };