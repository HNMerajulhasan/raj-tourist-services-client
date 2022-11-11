import Banner from './Banner/Banner';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './Services/ServiceCard';
import useTitle from '../../hooks/useTitle';
import HomeSection2 from './HomeSection2/HomeSection2';
import HomeSection3 from './HomeSection3/HomeSection3';



const Home = () => {
 const [services,setServices] =useState([]);
 useTitle('Home');

 useEffect(()=>{
    fetch('https://raj-tourist-services-server.vercel.app/services')
     .then(res=>res.json())
     .then(data=>setServices(data))
  },[])



    return (
        <div>
            <Banner></Banner>
            {/* <Services></Services> */}
           
           

            <div> 
        <div className='text-center mb-5 mt-12'>
           <p className="text-5xl font-bold text-orange-600 mb-5">Some Of The Services Below</p> 
           <p className='mt-5 font-bold mb-10'>Below, you can see that Some of my services Which i actually providing to my customer or client.<br/>Below You can click see More Option to see details All services Area</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
             services.map(service=><ServiceCard
                key={service._id}
                service={service}
             ></ServiceCard>)
           }
        </div>
        <div >
        <Link to='/services' className='flex justify-center m-8'>
           <button className="btn btn-primary ">See All Services</button>
        </Link>
      </div> 
      <h1 className='flex justify-center text-2xl text-bold mt-16 mb-8 font-bold text-fuchsia-600'>Below The Countries Which i Offering With Discount !!</h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
           {
             services.map(service=><HomeSection2
                key={service._id}
                service={service}
             ></HomeSection2>)
           }
        </div>
        <h1 className='flex justify-center text-2xl text-bold mt-16 mb-8 font-bold text-fuchsia-600'>Please Have a Look My Upcoming Services Below.</h1>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
           {
             services.map(service=><HomeSection3
                key={service._id}
                service={service}
             ></HomeSection3>)
           }
        </div>
    </div> 
   
      
        </div>
    );
};

export default Home;