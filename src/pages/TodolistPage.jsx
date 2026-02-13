import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddList from '../components/AddList';

function TodolistPage() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  async function fetchTodos() {
    try {
      const res = await axios.get('https://drive-accessible-pictures-send.trycloudflare.com/todos/17');
      setTodos(res.data || []);
    } catch (err) {
      console.error('fetchTodos error', err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      await axios.post('https://drive-accessible-pictures-send.trycloudflare.com/todos/17', {
        content: newTask.trim(),
        completed: false,
      });
      setNewTask('');
      fetchTodos();
    } catch (err) {
      console.error('add error', err);
    }
  };

  // delete todo
  async function deliList(itodoId) {
    try {
      await axios.delete(`https://drive-accessible-pictures-send.trycloudflare.com/todos/17/${itodoId}`);
      fetchTodos();
    } catch (err) {
      console.error('delete error', err);
    }
  }

  const hdlDel = (e, id) => {
    e.preventDefault();
    deliList(id);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex justify-center items-center p-4">
      <form onSubmit={handleAdd} className="bg-zinc-800 p-6 rounded-md w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold  text-white">My Todo</h2>

        <div className="flex gap-4 items-center border-b border-slate-700 pb-6 mb-6">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="new task"
            className="bg-transparent flex-1 placeholder-slate-400 outline-none text-white py-2"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-md">Add</button>
        </div>

        <div className="flex flex-col gap-4" >
            
          {todos.length === 0 && <p className="text-slate-400">No todos</p>}
          {todos.map((t) => (
            <AddList key={t.id} addlist={t} hdlDel={hdlDel} />
            
          ))
          }
           <button type ="edit" className="ml-auto bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Edit</button>
        <button type ="delete" className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3  py-1 rounded-md">X</button>
       
        </div>
         
      </form>
    </div>
  )
}

export default TodolistPage;