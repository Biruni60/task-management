import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc"
import img from '../assets/5101874_1_-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const SignIn = () => {
    const {signIn,googleSignIn}=useContext(AuthContext)
     const { handleSubmit, register, formState: { errors } } = useForm();
     const onSubmit = values =>{
        signIn(values.email,values.password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))
     };
     const handleGoogle=()=>{
         googleSignIn()
         .then(result=>console.log(result.user))
         .catch(error=>console.log(error.message))
     }
    return (
        <div>
        <div className="hero bg-base-200 border p-10 border-emerald-500">
  <div className="hero-content flex-col w-full  lg:flex-row-reverse">
    <img src={img} className="  rounded-lg" />
    <div className="w-full py-20 " >
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
        {...register("username", {
         pattern:{
            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message:"*Pass should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
         }
        })}
      />
      <p className="text-red-400 text-sm">{errors.username && errors.username.message}</p>
      <br />
      <button className="w-full btn text-white  bg-emerald-500 text-xl" type="submit">SIGN IN</button>
    </form>
     <div>
        <div className="flex justify-between py-4">
            <p className="text-sm">Do not have an Account?</p>
            <button className="btn btn-outline text-emerald-500 text-xl">REGISTER NOW</button>
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