import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/axiosSeceure";
import { useContext } from "react";
import { AuthContext } from "../User/AuthProvider";
import { Link } from "react-router-dom";


const Tasks = () => {
    const {user}=useContext(AuthContext)
    console.log(user?.email);
    const axiosSecure=useAxiosSecure()
    const{data:tasks=[],refetch}=useQuery({
        queryKey:['tasks'],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data;
        }
     })
     const todos=tasks?.filter(task=>task.role==="todo")
     const ongoings=tasks?.filter(task=>task.role==="ongoing")
     const completeds=tasks?.filter(task=>task.role==="completed")
    
     const handleRole=(id,role)=>{
        const data={id,role}
        axiosSecure.put(`/role`,data)
        .then(response => {
            // Handle the response
            console.log(response);
            refetch()
          })
          .catch(error => {
            // Handle errors
            console.error(error);
          });
     }
     const handleDelete=id=>{
axiosSecure.delete(`/delete/${id}`)
.then(response => {
    // Handle the response
    console.log(response);
    refetch()
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
     }
    return (
        <div className="grid md:grid-cols-3 gap-2">
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">TODO LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div>
           {
            todos?.map(todo=><div className="m-3 border p-3 border-black" key={todo._id}>
                <div className="flex gap-1">
                    <h1 className="font-bold">Title: </h1>
                    <p className="">{todo.title}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Description:</h1>
                    <p>{todo.description}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Deadlines:</h1>
                    <p>{todo.deadline}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Priority:</h1>
                    <p>{todo.priority}</p>
                </div>
                <div className="flex flex-col my-4">
                <button onClick={()=>handleRole(todo._id,"ongoing")} className="text-white btn bg-emerald-500">ONGOING</button>
                <button onClick={()=>handleRole(todo._id,"completed")} className="text-white btn bg-emerald-500">COMPLETED</button>
                <Link to={`/dashboard/update/${todo._id}`}><button className="text-white btn bg-emerald-500 w-full">EDIT</button></Link>
                <button onClick={()=>handleDelete(todo._id)} className="text-white btn bg-emerald-500">DELETE</button>
                </div>
                
            </div>)
           }
               </div>
           </div> 
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">ONGOING LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div>
               <div>
           {
            ongoings?.map(todo=><div className="m-3 border p-3 border-black" key={todo._id}>
                <div className="flex gap-1">
                    <h1 className="font-bold">Title: </h1>
                    <p className="">{todo.title}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Description:</h1>
                    <p>{todo.description}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Deadlines:</h1>
                    <p>{todo.deadline}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Priority:</h1>
                    <p>{todo.priority}</p>
                </div>
                <div className="flex flex-col my-4">
                <button onClick={()=>handleRole(todo._id,"todo")} className="text-white btn bg-emerald-500">TODO</button>
                <button onClick={()=>handleRole(todo._id,"completed")} className="text-white btn bg-emerald-500">COMPLETED</button>
                <Link to={`/dashboard/update/${todo._id}`}><button className="text-white btn bg-emerald-500 w-full">EDIT</button></Link>
                <button onClick={()=>handleDelete(todo._id)} className="text-white btn bg-emerald-500">DELETE</button>
                </div>
                
            </div>)
           }
               </div>
               </div>
           </div> 
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">COMPLETED LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div>
               <div>
           {
            completeds?.map(todo=><div className="m-3 border p-3 border-black" key={todo._id}>
                <div className="flex gap-1">
                    <h1 className="font-bold">Title: </h1>
                    <p className="">{todo.title}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Description:</h1>
                    <p>{todo.description}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Deadlines:</h1>
                    <p>{todo.deadline}</p>
                </div>
                <div className="flex">
                    <h1 className="font-bold">Priority:</h1>
                    <p>{todo.priority}</p>
                </div>
                <div className="flex flex-col my-4">
                <button onClick={()=>handleRole(todo._id,"todo")} className="text-white btn bg-emerald-500">TODO</button>
                <button onClick={()=>handleRole(todo._id,"ongoing")} className="text-white btn bg-emerald-500">ONGOING</button>
                <Link to={`/dashboard/update/${todo._id}`}><button className="text-white btn bg-emerald-500 w-full">EDIT</button></Link>
                <button onClick={()=>handleDelete(todo._id)} className="text-white btn bg-emerald-500">DELETE</button>
                </div>
                
            </div>)
           }
               </div>
               </div>
           </div> 

          
        </div>
    );
};

export default Tasks;