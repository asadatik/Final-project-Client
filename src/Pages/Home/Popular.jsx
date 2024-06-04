import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";



const Popular = () => {



const [menu,setMenu] = useState([]);

   useEffect(  ()=>{
    fetch('https://bistro-server-alpha.vercel.app/menu')
    .then( res=>res.json()        )
    .then( data=> setMenu(data.filter(item => item.category === 'popular')))

   } 
    ,[])
console.log(menu)

    return (
        <div>
              <div className='text-center my-10 space-y-4 ' >
              <h1 className='text-[#D99904] text-xl  font-normal  ' >
                
              <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                
            Popular Menu
                
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
              <p className='  text-4xl uppercase font-normal border-y-2 border-cyan-700  p-2 lg:w-1/3 mx-auto '   >FROM OUR MENU</p>
          
              <div  className="grid  md:grid-cols-2 gap-10"   >
                
                {
                    menu.map(item=>   <MenuItem key={item._id}  item={item} >   </MenuItem>           )
                }
             </div> 
                
          
             <button className="btn btn-outline dark:btn-secondary font-medium text-xl border-0 border-b-4 mt-4 ">View Full Menu</button>
             </div> 
                 
          
        </div>
    );
};

export default Popular;