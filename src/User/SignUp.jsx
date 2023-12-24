import { useForm } from "react-hook-form";

import img from '../assets/5101874_1_-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate=useNavigate()
    const {signUp,updateUser}=useContext(AuthContext)
     const { handleSubmit,reset, register, formState: { errors } } = useForm();
     const onSubmit = values =>{
        signUp(values.email,values.password)
        .then(result=>{
            console.log(result.user)
            updateUser(values.name,values.image)
            .then(()=>{
                console.log("user created");
                navigate('/dashboard')
            })
            .catch(error=>console.log(error.message))
        })
        .catch(error=>console.log(error.message))
        reset();
     };
     
    return (
        <div>
        <div className="hero bg-base-200 p-4 md:p-10 ">
  <div className="hero-content flex-col w-full  lg:flex-row-reverse">
    <img src={img} className="  rounded-lg" />
    <div className="w-full py-20 " >
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
    <label >
        <p className="text-xl font-semibold mb-3">Name</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("name", {
          required: "*Required",
        })}
      />
      <p className="text-red-400 text-sm">{errors.name && errors.name.message}</p>
    <label >
        <p className="text-xl font-semibold mb-3">Photo URL</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="text"
        {...register("image", {
          required: "*Required",
        })}
      />
      <p className="text-red-400 text-sm">{errors.image && errors.image.message}</p>
      <label >
        <p className="text-xl font-semibold mb-3">Email</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
        type="email"
        {...register("email", {
          required: "*Required",
        })}
      />
      <p className="text-red-400 text-sm">{errors.email && errors.email.message}</p>
      <label >
        <p className="text-xl font-semibold mb-4">Password</p>
    </label>
      <input
      className="w-full input input-bordered mb-3 input-accent"
       type="password"
        {...register("password", {
         pattern:{
            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message:"*Pass should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
         }
        })}
      />
      <p className="text-red-400 text-sm">{errors.password && errors.password.message}</p>
      <br />
      <button className="w-full btn text-white  bg-emerald-500 text-xl" type="submit">SIGN UP</button>
    </form>
     <div>
        <div className="flex justify-between py-4">
            <p className="text-sm">Already have an Account?</p>
            <Link to="/signin"><button className="btn btn-outline text-emerald-500 text-xl">SIGN IN NOW</button></Link>
        </div>
     </div>
    </div>
  </div>
</div>
           
        </div>
    );
}; 

export default SignUp;