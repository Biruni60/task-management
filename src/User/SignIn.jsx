import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc"
import img from '../assets/5101874_1_-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate=useNavigate()
    const {signIn,googleSignIn}=useContext(AuthContext)
     const { handleSubmit, reset,register, formState: { errors } } = useForm();
     const onSubmit = values =>{
        signIn(values.email,values.password)
        .then(result=>{
            console.log(result.user)
          navigate('/dashboard')
        })
        .catch(error=>console.log(error.message))
        reset();
     };
     const handleGoogle=()=>{
         googleSignIn()
         .then(result=>{console.log(result.user)
            navigate('/dashboard')})
         .catch(error=>console.log(error.message))
     }
    return (
        <div>
        <div className="hero bg-base-200 p-4 md:p-10 ">
  <div className="hero-content flex-col w-full  lg:flex-row-reverse">
 
    <img src={img} className=" rounded-lg" />

    <div className="w-full py-20  " >
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
      className="w-full input input-bordered input-accent"
       type="password"
        {...register("password", {
         required: "* Required"
        })}
      />
      <p className="text-red-400 text-sm">{errors.password && errors.password.message}</p>
      <br />
      <button className="w-full btn text-white  bg-emerald-500 text-xl" type="submit">SIGN IN</button>
    </form>
     <div>
        <div className="flex justify-between py-4">
            <p className="text-sm">Do not have an Account?</p>
            <Link to="/signup"><button className="btn btn-outline text-emerald-500 text-xl">SIGN UP NOW</button></Link>
        </div>
        <button onClick={handleGoogle} className="flex mx-auto btn text-white bg-black text-xl  items-center">SIGN IN WITH <FcGoogle className="text-xl "/> </button>
     </div>
    </div>
  </div>
</div>
           
        </div>
    );
}; 

export default SignIn;