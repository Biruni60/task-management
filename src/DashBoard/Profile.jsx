import { useContext } from "react";
import { AuthContext } from "../User/AuthProvider";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const {user,logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSignOut=()=>{
        logOut()
        .then(()=>{
            console.log("logout successfull");
navigate('/')
        })
        .catch(error=>console.log(error.message))
    }
    return (
       <div className=" max-h-screen border border-black">
         <div className="flex justify-center items-center  ">
           <div className="card w-96">
  <figure className="py-10">
    <img src={user?.photoURL}  className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName}</h2>
    <p>{user?.email}</p>
    <div className="card-actions w-full">
      <button onClick={handleSignOut} className="btn bg-emerald-500 text-white w-full">Log Out</button>
    </div>
  </div>
</div> 
        </div>
       </div>
    );
};

export default Profile;