import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
  // TODO: get isAdmin value from the database
  const [isAdmin] =  useAdmin();

    return (
        <div className="flex">
    {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu text-black  p-4">
                   {  isAdmin ?  
                    <>
                     <li>
                     <NavLink to="/dashboard/adminHome">
                         <FaHome></FaHome>
                         Admin Home</NavLink>
                 </li>
                 <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItem">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                    </> 
                   :
                   <>
                     <li>
                     <NavLink to="/dashboard/userHome">
                         <FaHome></FaHome>
                         User Home</NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard/payment">
                         <FaCalendar></FaCalendar>
                         Reservation</NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard/cart">
                         <FaShoppingCart></FaShoppingCart>
                         My Cart ({cart.length})</NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard/review">
                         <FaAd></FaAd>
                         Add a Review</NavLink>
                 </li>
                 <li>-
                     <NavLink to="/dashboard/bookings">
                         <FaList></FaList>
                         My Bookings</NavLink>
                 </li>  
                    </> 

                   }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
       {/* ////////////////////////////////////////////// */}
            <div className="flex-1 border-4  border-cyan-500 p-8">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;