import { Parallax } from 'react-parallax';
import useMenu from '../../Hooks/useMenu';
import img from '../../assets/menu/dessert-bg.jpeg'     
import MenuItem from '../Home/MenuItem';
import { Link } from 'react-router-dom';

const Dessert = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
   

    return (
        <div>  
            <Parallax
blur={{ min: -50, max: 50 }}
bgImage={img}
bgImageAlt="the menu"
strength={-200}
>
<div className="hero h-[700px]">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className=" p-4 lg:h-80  lg:w-[1000px]  text-center flex flex-col justify-center  bg-[#15151599]      ">
      <h1 className="mb-5 text-2xl  lg:text-5xl uppercase font-cinzel  font-semibold"> DESSERTS </h1>
      <p className=" lg:text-base uppercase   font-cinzel font-medium  ">  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
      
    </div>
    </div>
</div>
            </Parallax>   
           <div className='text-center container mx-auto     '  >  
            <div  className="grid   px-2 mt-10 md:grid-cols-2 gap-10"   >
                
                {
                    desserts.map(item=>   <MenuItem key={item._id}  item={item} >   </MenuItem>           )
                }
             </div> 
                 <Link  to='/shop/dessert'  >                        

<button className="btn btn-outline dark:btn-secondary font-inter font-medium text-xl border-0 border-b-4 mt-4 ">ORDER YOUR FAVORITES DESSERTS</button>

                 </Link>
            </div>
      </div>


      
    );
};

export default Dessert;