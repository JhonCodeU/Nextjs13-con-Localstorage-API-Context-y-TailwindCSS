"use client";
import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, {
      title,
      description,
      id: uuidv4()
    }]);
  };

  const updateTask = (id, title, description) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title,
          description
        }
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { useTaskContext, TaskProvider };