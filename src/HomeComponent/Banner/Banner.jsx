import {  useNavigate } from 'react-router-dom';
import img from '../../assets/6378759.jpg'

const Banner = () => {
    const navigate= useNavigate()
    const handleNavigate=()=>{
navigate('/signin')
    }
    return (
        <div>
            <img className='h-[40vh] lg:h-[70vh] hero-overlay bg-fixed   w-full' src={img} alt="" />
           <div className='flex justify-center'>
           <button onClick={handleNavigate} className='btn bg-emerald-500  opacity-100 -my-60 lg:-my-80 text-white border-x-0 border-t-0 border-b-4 hover:bg-black text-xl px-8 pb-4 pt-2 border-black '>EXPLORE NOW</button>
           </div>
        </div>
    );
};

export default Banner;