
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'




// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Category() {
  return (
    <  >
         <div className='text-center my-10 space-y-2 ' >
              <h1 className='text-[#D99904]  text-xl  font-normal  ' > 
                          <span className="inline-block w-8 h-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                From 11:00am to 10:00pm 
                        <span className="inline-block w-8 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full"></span>
                     <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
             
          
       
              <p className='text-[#151515] dark:text-white  text-4xl uppercase font-normal border-y-2  border-cyan-700  p-2 lg:w-1/3 mx-auto '   >ORDER ONLINE</p>
          
          </div> 
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
       
        centeredSlides={true}
         
        loop={true}
        // autoplay={{
        //   delay:1000,
        //   disableOnInteraction: false,
        //   }}


        pagination={{
          clickable: true,
        }}

    
        navigation={true}
        modules={ [Pagination, Navigation]}
        className="mySwiper"

      
      >
        
        <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className="lg:text-3xl  font-normal  uppercase   ml-2  -mt-16 text-black">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className="lg:text-3xl font-normal uppercase ml-2 -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className="lg:text-3xl font-normal uppercase  ml-2    -mt-16 text-black">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className="lg:text-3xl font-normal uppercase   ml-2  -mt-16 text-black">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className="lg:text-3xl font-normal uppercase  ml-2  -mt-16 text-black">Salads</h3>
                 </SwiperSlide>
     
  
          </Swiper>
    
    </>
  );
}
