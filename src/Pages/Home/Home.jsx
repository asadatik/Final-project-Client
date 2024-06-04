import { Helmet } from "react-helmet-async";
import Category from "./Category";
import Featured from "./Featured";
import Popular from "./Popular";
import Review from "./Review";
import Slider from "./Slider";


const Home = () => {
    return (
        <div   className=" mb-10   px-1  " >

            <Helmet><title>Bistro-Boss || Home</title></Helmet>
             <Slider></Slider>
             <Category></Category>
             <Popular></Popular>
             <Featured></Featured>
             <Review></Review>
        </div>
    );
};

export default Home;