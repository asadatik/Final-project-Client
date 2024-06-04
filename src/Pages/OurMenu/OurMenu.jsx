
import MenuBanner from "./MenuBanner";
import useMenu from '../../Hooks/useMenu';
import MenuItem from "../Home/MenuItem";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salad from "./Salad";
import Soups from "./Soups";
import { Link } from "react-router-dom";


const OurMenu = () => {
    const [menu] = useMenu();


  
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div className="mb-10   px-1  "   >
               
     <MenuBanner></MenuBanner>
     {/* Offered Section  */}
             <section>
              <div>
              <div className='text-center my-10 space-y-4 ' >
              <h1 className='text-[#D99904] text-xl  font-normal italic ' >
                
              <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                
                        Don`t miss
                
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
              <p className='  text-4xl uppercase font-normal border-y-2 border-cyan-700  p-2 lg:w-1/3 mx-auto font-inter  '   >TODAY`S OFFER</p>
          
              <div  className="grid  container mx-auto  md:grid-cols-2 gap-10">
                
                {
                    offered.map(item=>   <MenuItem key={item._id}  item={item} >   </MenuItem>           )
                }
             </div> 
<Link to='/shop'  >            
<button className="btn btn-outline dark:btn-secondary font-inter font-medium text-xl border-0 border-b-4 mt-4 ">ORDER YOUR FAVOURITE FOOD</button>
 </Link>             </div> 
                   
               
              </div> 
                
            </section> 
  {/*  Desserts Section & Others SECTION */}
        <Dessert></Dessert>
          <Pizza></Pizza>
            <Salad></Salad>
                  <Soups></Soups>
  </div>
    );
};

export default OurMenu;