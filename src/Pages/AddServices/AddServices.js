import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
   useTitle('AddServices'); 
   

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services'

   const handleAddNewService=event=>{
    event.preventDefault();
    
    alert('Your New Service Added Successfully');

    navigate(from, { replace: true })
   }

  




   
    return (
        <div>
            <div className='bg-pink-300 m-6 rounded-lg'>
         <h1 className='text-3xl text-center mt-10 p-3 font-bold text-indigo-700'>Please Add Your New Services.</h1> 
                   
                        <div className='flex justify-center'>
                            
                            <form onSubmit={handleAddNewService}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name="firstName" type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered" />
                                    <input name="address" type="text" placeholder="Your Address" className="input input-ghost w-full input-bordered" />
                                    <input name="service" type="text" placeholder="Service Name"  className="input input-ghost w-full input-bordered"  />
                                </div>
                                   
                                <input className='btn mb-4 mt-2' type="submit" value="Add New Service"></input>
                               
                            </form>
                        </div>
                
                     
                
             


  


         </div>
        </div>
    );
};

export default AddServices;