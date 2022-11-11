import React, { useContext, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Update = () => {
   const storedUser = useLoaderData();
   const navigate = useNavigate()
   const location = useLocation();
   const from = location.state?.from?.pathname || '/myReviews'
   useTitle('Update Review');
   const [updateReview,setUpdateReview]=useState({storedUser})

    const handleUpdateReview=event=>{
        event.preventDefault();
       
        fetch(`https://raj-tourist-services-server.vercel.app/reviews/${storedUser._id}`, {
           method:'PUT',
           headers: {
              'content-type': 'application/json'
           },
           body: JSON.stringify(updateReview)
          
        })
        .then(res=>res.json()) 
        .then(data => {
            if(data.modifiedCount>0){
                alert('Review Updated Successfully');
            }
            console.log(data);
        })
        navigate(from, { replace: true })
    }

    const handleInputChange=event=>{
        const field=event.target.name;
        const value=event.target.value;
        const newUser={...updateReview}
        newUser[field]=value;
        setUpdateReview(newUser)

    }  


    return (
        <div>
          
           <p className='flex justify-center font-bold mb-3 text-2xl mt-14'>Now You Can Update Your Name, Address and Your Review Message.</p>
                        <div className='flex justify-center mt-9'>
                            
                            <form onSubmit={handleUpdateReview}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input onChange={handleInputChange} name="firstName" defaultValue={storedUser.customer} type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered" />
                                    <input onChange={handleInputChange} name="address" type="text" defaultValue={storedUser.address} placeholder="Your Address" className="input input-ghost w-full input-bordered" />
                                    <input onChange={handleInputChange} name="email" type="text" placeholder="Your email" defaultValue={storedUser?.email} className="input input-ghost w-full input-bordered" readOnly />
                                </div>
                                   <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Add Your New Review for this Service" required></textarea>
                                 
                                <input className='btn mb-4 mt-2 mb-8' type="submit" value="Update User"></input>
                               
                            </form>
                        </div> 

        </div>
    );
};

export default Update;
