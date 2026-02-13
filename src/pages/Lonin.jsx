import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router';

function Lonin(){
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: "",
    });


const  inputStyle = "border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

const navigate = useNavigate()

const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prev) => ({...prev,[name]: value,}));
};
const hdlSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://drive-accessible-pictures-send.trycloudflare.com/auth/login", formLogin)
    console.log(res.data)
     navigate("/Todolist")
}
 console.log(formLogin)
    return (
    <div className="min-h-screen bg-blue-950 flex justify-center items-center p-4">
        <form 
        onSubmit={hdlSubmit} 
        className="bg-zinc-800 p-6 rounded-md w-full max-w-md flex flex-col gap-4">

            <h2 className="text-2xl font-bold text-center text-white">Welcome to Login Page</h2>
            <label htmlFor="username" className="text-white">Username</label>
            <input 
            type="text"
            className={inputStyle}
            name="username"
            onChange={hdlChange}
            value={formLogin.username}
            ></input>


            <label htmlFor="password" className="text-white">Password</label>
            <input 
            type="password"
            className={inputStyle}
            name="password"
            onChange={hdlChange}
            value={formLogin.password}
            ></input>
        
            <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">LOG IN</button>


        </form>
        </div>
    )
}

export default Lonin;