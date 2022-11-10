import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({review,handleDelete}) => {
const {_id,serviceName,customer,price,email,service,message,address}=review; 
const [reviewService,setReviewservice]=useState({})

useEffect(()=>{
  fetch(`http://localhost:5000/Allservices/${service}`)
  .then(res=>res.json())   
  .then(data=>setReviewservice(data))
},[service])

    return (
        <tr>
        <th>
          <label>
            <Link to={`/update/${review._id}`}>
               <button className='btn btn-ghost bg-lime-200'>Edit Review</button>
            </Link>
            <button className='btn btn-ghost bg-red-400 ml-2' onClick={()=>handleDelete(_id)}>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-20 h-20">
               { 
                 reviewService?.img &&
               <img src={reviewService.img} className='' alt="Avatar Tailwind CSS Component" />
               }
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              {/* <div className="text-sm opacity-50">{phone}</div> */}
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">Price of Service: ${price}</span>
        </td>
        <td>{message}</td>
        <td>{address}</td>
        <td>{email}</td>
        <th>
          {/* <button
           onClick={()=>handleStatusUpdate(_id)}
           className="btn btn-ghost btn-xs">{status ? status :'pending'}</button> */}
        </th>
      </tr>
    );
};

export default MyReviewRow;