import img1 from "../assets/9461552.jpg"
import img2 from "../assets/na_may_13.jpg"
import img3 from "../assets/2467639.jpg"

const About = () => {
    return (
        <div className=" max-w-screen-lg mx-auto">
            <div>
                <h2 className="text-black text-4xl font -bold my-10 text-center">ABOUT US</h2>
            </div>
            <div className=" p-4 md:p-10">
             <p className="text-lg font-medium text-center">Welcome to SCC Technovision Inc., where innovation meets efficiency in the world of task management. Our mission is to empower individuals and teams to achieve their goals seamlessly through our cutting-edge collaborative platform</p>
             <div>
             <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={img1} className="max-w-md rounded-lg" />
    <div className="w-1/2">
      <h1 className="text-3xl font-bold">Who We Are</h1>
      <p className="py-6 ">At SCC Technovision Inc., we are a passionate team of tech enthusiasts dedicated to creating solutions that simplify and enhance the way people manage tasks. Established with a vision to revolutionize task management, we strive to provide a platform that caters to the diverse needs of professionals across various industries</p>

    </div>
  </div>
</div>
             <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={img2}className="max-w-md rounded-lg " />
    <div className="w-1/2">
      <h1 className="text-3xl font-bold">Our Vision</h1>
      <p className="py-6 ">Our vision is to be a leader in the realm of task management, offering a platform that not only streamlines workflows but also fosters collaboration and productivity. We believe that effective task management is at the core of success, and our goal is to empower individuals and organizations to achieve their objectives with ease</p>

    </div>
  </div>
</div>
 <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={img3} className="max-w-md rounded-lg " />
    <div className="w-1/2">
      <h1 className="text-3xl font-bold">How We Can Help You</h1>
      <p className="py-6 ">Whether you're a developer striving for project efficiency, a corporate professional managing multiple tasks, or a banker juggling priorities, our platform is tailored to meet your needs. SCC Technovision Inc. is committed to providing a task management solution that adapts to your unique workflow, helping you stay organized and focused on what matters most</p>

    </div>
  </div>
</div>
             </div>
            </div>
        </div>
    );
};

export default About;