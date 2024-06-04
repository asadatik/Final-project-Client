
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChatRightQuoteFill } from "react-icons/bs";


// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://bistro-server-alpha.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])




    return (
        <div>
              <div className="text-center  space-y-4 " >
              <h1 className='text-[#D99904] text-xl  font-normal  ' >
                
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        What Our Clients Say
                  
                  <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
                <p className=' text-4xl uppercase font-normal border-y-2 border-cyan-700  p-2 lg:w-1/3 mx-auto '   >TESTIMONIALS</p>
            
             </div>     
            
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             {
                    review.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-4 lg:mx-24 my-16">
                        <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /> 
                            <   BsChatRightQuoteFill className='mt-4 w-12 h-14 '   />
                            <p className="pb-8 pt-2 ">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
      </Swiper>

        </div>
    );
};

export default Review;