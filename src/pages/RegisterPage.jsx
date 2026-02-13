import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import { registerValidator } from '../validators/register.validator';
// import { toast } from 'react-toastify';
import axios from 'axios';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState(null);
    const inputStyle = "p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const navigate = useNavigate()

    const hdlChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((prev) => ({...prev,[name]: value,}));
    };

    const hdlSubmit = async (evt) => {
        evt.preventDefault();
        setErrors({})
        const result = registerValidator.safeParse(formData)
        if(!result.success){
            const {fieldErrors} = result.error.flatten()
            console.log(fieldErrors)
            setErrors(fieldErrors)
            return;
        }
        try{
            const res = await axios.post("https://drive-accessible-pictures-send.trycloudflare.com/auth/register"
                , formData);
                console.log("Register success:", res.data);
                // toast.success("ลงทะเบียนสำเร็จ")
                navigate("/")
            } catch (error) {
                console.error("Register failed:", error);
                // toast.error("เกิดข้อผิดพลาดในการลงทะเบียน")
            }
        };
            
        console.log("errors:", errors);
  return (
    
     <div className="min-h-screen bg-blue-950 flex justify-center items-center p-4">
        <form className="bg-zinc-800 p-6 rounded-md w-full max-w-md flex flex-col gap-4" onSubmit={hdlSubmit}>
            <h2 className="text-2xl font-bold text-center text-white">Register</h2>
            <input type="text"
             placeholder="Username" 
             name="username" 
             className={`${inputStyle} text-white`} 
             onChange={hdlChange} />
            {errors?.username && <p className="text-red-500 text-sm">{errors.username}</p>}


            <input type="password"
             placeholder="Password" 
             name="password" 
             className={`${inputStyle} text-white`} 
             onChange={hdlChange} />
            {errors?.password && <p className="text-red-500 text-sm">{errors.password}</p>}


            <input type="password" 
            placeholder="Confirm Password" 
            name="confirmPassword" 
            className={`${inputStyle} text-white`} 
            onChange={hdlChange} />
            {errors?.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}


            <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Register</button>
            <p className="text-white text-center">Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate("/")}>Login </span></p>
         </form>   
         </div>
  )
}

export default RegisterPage;