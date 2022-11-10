import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
   const {user} =useContext(AuthContext);
   const [reviews,setReviews]=useState([]);
   useTitle('MyReview');
   useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=>setReviews(data))
  },[user?.email])

  const handleDelete=id=>{
    const proceed=window.confirm('Are You sure to delete this Item');
   if(proceed){
     fetch(`http://localhost:5000/reviews/${id}`, {
       method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
            alert('Deleted Successfully');
            const remaining=reviews.filter(rvw=>rvw._id!==id);
            setReviews(remaining);
         }
     })
   }
}

if(reviews.length==0){
   return <p className='flex justify-center text-3xl mt-40 mb-60 text-rose-500 font-bold'>No Reviews Were Added.</p>
}

    return (
        <div>
          <div>
            <h2 className="text-3xl m-4">You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto m-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Customer Name</th>
                            <th>Selected Services</th>
                            <th>Customer Reviews</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        reviews.map(review=><MyReviewRow
                         key={review._id}
                         review={review}
                         handleDelete={handleDelete}
                        //  handleStatusUpdate={handleStatusUpdate}
                        ></MyReviewRow>)
                       } 
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyReview;