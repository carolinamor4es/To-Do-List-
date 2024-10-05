import React, { Dispatch, SetStateAction, useEffect, createContext, useState, ReactNode } from 'react';
import { Task } from '../@types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TaskContextProps {
  task: Task;
  tasks: Task[];
  selectTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  createTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void; 
  toggleTaskCompleted: (id: number) => void;
  setTask: Dispatch<SetStateAction<Task>>;
}

export interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  task: { id: 0, taskName: '', category: '', completed: false },
  tasks: [],
  selectTask: () => { },
  createTask: () => { },
  updateTask: () => { }, 
  deleteTask: () => { },
  toggleTaskCompleted: () => { },
  setTask: () => { },
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [task, setTask] = useState<Task>({ id: 0, taskName: '', category: '', completed: false });
  const [tasks, setTasks] = useState<Task[]>([]);

  async function storeTasks(tasks: Task[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadTasks() {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        } else {
          setTasks([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const selectTask = (task: Task) => {
    setTask(task);
  };

  const deleteTask = (taskID: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskID);
    setTasks(updatedTasks);
  };

  const createTask = (task: Task) => {
    const newTask = {
      id: Date.now(),
      taskName: task.taskName,
      category: task.category || '',
      notes: task.notes || '',
      completed: false,
    };
    setTasks(prevTasks => Array.isArray(prevTasks) ? [...prevTasks, newTask] : [newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(prevTasks => 
      Array.isArray(prevTasks)
        ? prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
        : []
    );
  };

  const toggleTaskCompleted = (taskID: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskID ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      storeTasks(tasks);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ task, selectTask, deleteTask, tasks, createTask, updateTask, toggleTaskCompleted, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};