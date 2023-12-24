

const Tasks = () => {
    return (
        <div className="grid md:grid-cols-3 gap-2">
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">TODO LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div className=" m-3 border border-black">
            <h2>
              title  
            </h2>
            <h2>
                priority
            </h2>
            <h2>deadline</h2>
            <h2>description</h2>
               </div>
           </div> 
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">ONGOING LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div>
               <div className=" m-3 border border-black">
            <h2>
              title  
            </h2>
            <h2>
                priority
            </h2>
            <h2>deadline</h2>
            <h2>description</h2>
               </div>
               </div>
           </div> 
           <div className="border border-emerald-500">
               <h2 className="text-center text-3xl font-bold my-4 ">COMPLETED LIST</h2>
               <p className="text-center text-xl font-semibold my-2">tasks</p>
               <div>
               <div className=" m-3 border border-black">
            <h2>
              title  
            </h2>
            <h2>
                priority
            </h2>
            <h2>deadline</h2>
            <h2>description</h2>
               </div>
               </div>
           </div> 
        </div>
    );
};

export default Tasks;