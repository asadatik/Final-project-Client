
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured bg-fixed  text-white  my-10"    > 
              <div className='bg-[#151515B3] bg-opacity-60 pt-6 '   >
              <h1 className='text-[#D99904] text-xl text-center font-normal  ' >
                
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  
                  Check it out
                  
                  <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
                <p className=' my-6  text-4xl uppercase font-normal border-y-2 border-cyan-700 text-center p-2 lg:w-1/3 mx-auto '   >FROM OUR MENU</p>
            

            <div className="md:flex justify-center items-center  pb-20 pt-12 px-4 md:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline text-xl btn-secondary border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
              </div>
        </div>
    );
};

export default Featured;