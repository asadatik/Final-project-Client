import { Parallax } from "react-parallax";
import img2 from '../../assets/contact/banner.jpg' 
    
const Contact = () => {
    return (
        <div>
              <Parallax
blur={{ min: -50, max: 50 }}
bgImage={img2}
bgImageAlt="the menu"
strength={-200}
>
<div className="hero h-[800px]">
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className=" p-4 lg:h-80  lg:w-[1000px]  text-center flex flex-col justify-center  bg-[#15151599] ">
  <h1 className="mb-5 text-2xl  lg:text-5xl uppercase font-cinzel  font-semibold"> CONTACT US </h1>
  <p className=" lg:text-base uppercase   font-cinzel font-medium  "> We’d love to hear from you! Fill out the form below to get in touch with us. </p>
</div>
</div>
</div>
               </Parallax>  
               
                   
        </div>
    );
};

export default Contact;