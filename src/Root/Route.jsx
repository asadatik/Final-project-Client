import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";


const Route = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');


    return (
        <div>   
             { noHeaderFooter || <NavBar></NavBar>  }

               <div>
               <Outlet></Outlet> 
             </div>
             { noHeaderFooter ||   <Footer></Footer> }
        </div>
    );
};

export default Route;