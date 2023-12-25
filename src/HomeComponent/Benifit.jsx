import img1 from "../assets/6840478.png"
import img2 from "../assets/images.png"
import img3 from "../assets/download.png"
const Benifit = () => {
    return (
        <div className="mb-20">
        <h2 className="text-center my-10 text-4xl text-emerald-500">- --WHO CAN BENIFIT?---</h2>
         <div className=" max-w-screen-lg mx-auto">
          <div className="grid p-4 gap-4 md:grid-cols-3 border border-emerald-500">
          <div className="border p-4 border-black">
          <div className="flex justify-center"><img className="w-20" src={img1} alt="" /></div>
          <div>
            <h2 className="text-xl text-center font-bold">DEVLOPERS</h2>
            <p className="font-semibold text-center">Stay organized with project tasks and deadlines</p>
          </div>
          </div>
          <div className="border p-4 border-black">
          <div className="flex justify-center"><img className="w-20" src={img2} alt="" /></div>
          <div>
            <h2 className="text-xl text-center font-bold uppercase">Corporate Professional</h2>
            <p className="font-semibold text-center">Efficiently manage team projects and collaborations</p>
          </div>
          </div>
          <div className="border p-4 border-black">
          <div className="flex justify-center"><img className="w-20" src={img3} alt="" /></div>
          <div>
            <h2 className="text-xl text-center font-bold">BANKERS</h2>
            <p className="font-semibold text-center">Streamline task tracking for financial projects and reports</p>
          </div>
          </div>
          </div>
         </div>   
        </div>
    );
};

export default Benifit;