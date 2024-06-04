import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    return (
        <div>
          <div    className="text-center space-y-6"     >
          <h1 className='text-[#D99904] text-xl  font-normal  ' >
                
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  
                        Reservation 
                  
                  <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
                          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span></h1>
                <p className='  text-4xl uppercase font-normal border-y-2 border-cyan-700  p-2 lg:w-1/3 mx-auto '   >BOOK A TABLE</p>
  
            </div>    
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>



        </div>
    );
};

export default Payment;