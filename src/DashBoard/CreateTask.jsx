import { useForm } from "react-hook-form";

import img from '../assets/3275466.jpg'

import {  useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/axiosSeceure";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from './../User/AuthProvider';


const CreateTask = () => {
    const navigate=useNavigate()
    const axiosPublic=useAxiosSecure()
    const {user}=useContext(AuthContext)
     const { handleSubmit,reset, register } = useForm();
     const onSubmit = data =>{
      const userInfo = {
       title:data.title,
       description:data.description,
       deadline:data.deadline,
       priority:data.priority,
       email:user?.email,
       role:"todo"
    }
    axiosPublic.post('/addtasks', userInfo)
        .then(res => {
            if (res.data.insertedId) {
                console.log('user added to the database')
                reset();
               toast("task Created Succesfully")
                navigate('/dashboard/tasks');
            }
        })
        reset();
     };
     
    return (
        <div>
        <div className="hero bg-base-200  md:p-10 ">
  <div className="hero-content flex-col w-full  lg:flex-row-reverse">
    <div className="lg:w-3/4 h-full">
    <img src={img} className="h-full  rounded-lg" />
    </div>
    <div className="w-full py-20 " >
    <form className="w-full  " onSubmit={handleSubmit(onSubmit)}>
    <label >
        <p className="text-xl font-semibold mb-3">Title</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("title", {
          required: "*Required",
        })}
      /><label >
        <p className="text-xl font-semibold mb-3">Description</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("description", {
          required: "*Required",
        })}
      /><label >
        <p className="text-xl font-semibold mb-3">Deadlines</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("deadline", {
          required: "*Required",
        })}
      />
      <label >
        <p className="text-xl font-semibold mb-3">Priority</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("priority", {
          required: "*Required",
        })}
      />
      
      
      <br />
      <button className="w-full btn text-white  bg-emerald-500 text-xl" type="submit">CREATE TASK</button>
    </form>
     
    </div>
  </div>
</div>
             <ToastContainer />  
        </div>
    );
}; 

export default CreateTask;