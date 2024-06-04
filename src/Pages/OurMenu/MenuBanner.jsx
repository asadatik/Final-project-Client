
import { Parallax } from 'react-parallax';
import './MenuBanner.css';
import img from '../../assets/menu/banner3.jpg'


const MenuBanner = () => {
    return (

<Parallax
blur={{ min: -50, max: 50 }}
bgImage={img}
bgImageAlt="the menu"
strength={-200}
>
<div className="hero h-[800px]">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className=" p-4 lg:h-96  lg:w-[1200px]  text-center flex flex-col justify-center  bg-[#15151599]      ">
      <h1 className="mb-5 text-3xl  lg:text-7xl uppercase font-cinzel  font-bold">OUR MENU</h1>
      <p className=" lg:text-2xl uppercase  font-cinzel font-medium  ">Would you like to try a dish?</p>
      
    </div>
    </div>
</div>
</Parallax>
    );
};

export default MenuBanner;