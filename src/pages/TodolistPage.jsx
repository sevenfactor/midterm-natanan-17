import axios from 'axios';
import React, {useEffect,useState } from 'react'
import AddList from '../components/AddList';

    
function TodolistPage() {
    const [dera,setList] = useState([]);
    async function getUser() {
        const resTodolist = await axios.get("https://drive-accessible-pictures-send.trycloudflare.com/todos/17");
        console.log(resTodolist.data);
    setDate (resTodolist.data);
    }
    

     useEffect(() => {
        getUser();
    }, []);

    const dhlDel = (e,id) => {
        e.preventDefault();
        deliList(id);
    };
    async function deliList(itodoId) {
        await axios.delete(`https://drive-accessible-pictures-send.trycloudflare.com/todos/17/${itodoId}`,
             );
             resTodolist();
    }
    

   
    
  return (
   <div className="min-h-screen bg-blue-950 flex justify-center items-center p-4">
        <form className="bg-zinc-800 p-6 rounded-md w-full max-w-md flex flex-col gap-4">
            <h2 className="text-2xl font-bold  text-white">My Todo</h2>
             <div className="flex gap-4 items-center border-b border-slate-700 pb-6 mb-6">
          <input
            placeholder="new task" 
            className="bg-transparent flex-1 placeholder-slate-400 outline-none text-white py-2"/>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-md" >Add</button>
        </div>

        <div className="flex flex-col gap-4"></div>
          <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-md">
            <input type="checkbox" className="w-5 h-5" />
           <span className="text-white"></span>
            <button type ="edit" className="ml-auto bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Edit</button>
            <button type ="delete" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">X</button>
          </div>
          
        
            </form>
        </div>
  )
}

export default TodolistPage