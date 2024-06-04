import { Parallax } from "react-parallax";
import img2 from '../../assets/shop/banner2.jpg' 
import ShopTabs from "./ShopTabs";

const OurShop = () => {
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
  <h1 className="mb-5 text-2xl  lg:text-5xl uppercase font-cinzel  font-semibold"> OUR SHOP </h1>
  <p className=" lg:text-base uppercase   font-cinzel font-medium  ">  Would you like to try a dish? </p>
</div>
</div>
</div>
               </Parallax>

             <section className="container mx-auto  "     >
             <ShopTabs></ShopTabs>
             </section>
        </div>
    );
};

export default OurShop;