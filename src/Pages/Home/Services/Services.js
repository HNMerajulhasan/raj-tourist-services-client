import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Allservices from './Allservices';
import {SwishSpinner} from "react-spinners-kit";
//import '../../../Style.css';

const Services = () => {
  const [AllServices,setALLServices] =useState([]);
  const [loading, setLoading] = useState(true)
  useTitle('Services');
  useEffect(()=>{
    fetch('https://raj-tourist-services-server.vercel.app/Allservices')
     .then(res=>res.json())
     .then(data=>setALLServices(data))
     setLoading(true)
  },[])

    return (
      <div> 
        {/* <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
         </div>
       </div> */}

          <div className="">
               <div className="flex justify-center hidden">
                    <SwishSpinner size={40} frontColor="blue" 
                        backColor="white" loading={loading} />
                </div>
          </div>

   {/* {AllServices?AllServices : 'Loading...'} */}
  
        <div className='text-center mb-5 mt-12'>
           <p className="text-5xl font-bold text-orange-600 mb-5">Have a Look All Services</p> 
           <h2 className="text-4xl font-semibold">The Services Area Which I Offered</h2>
           <p className='mt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          
           {
             AllServices.map(services=><Allservices
                
                key={services?._id}
                services={services}
             ></Allservices>)
           }
        </div>
       <div >
       
      </div> 
    </div> 
    );
};

export default Services;
