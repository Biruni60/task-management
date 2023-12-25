import contact from "../assets/3646374_1_-removebg-preview.png"
const Contact = () => {
    return (
        <div>
            <div id='contact' className='pt-10 text-white px-20 pb-20'>
 <h2 className=' text-black text-center text-3xl pb-4 '>--Get In Touch--</h2>
 <hr className=' pt-10 md:pb-10 md:mx-20'/>
 <div className='lg:flex border p-10 rounded  border-emerald-500'>
  <div className='lg:w-1/2'>
<img src={contact} alt="" />
  </div>
  <div className='lg:w-1/2 my-auto '>
  <form className='text-black flex flex-col gap-4  ' >
      <input placeholder='Name' className='w-full p-2 rounded-md' type="text" name="from_name" />
      <input placeholder='Email' className='w-full p-2 rounded-md' type="email" name="from_email" />
      <textarea placeholder='Message' className='w-full p-2 rounded-md' name="message" />
      <input className=' btn text-emerald-500 text-xl' type="submit" value="Send" />
    </form>
  </div>
 </div>
 </div>
        </div>
    );
};

export default Contact;