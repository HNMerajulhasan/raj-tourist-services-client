import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
  const{_id,service_name,img,price,description} = service; 
    return (
      
        <div className="card card-compact mx-7 bg-base-100 shadow-xl">


<PhotoProvider>
      <div className="foo">
       
          <PhotoView src={img}>
             <figure><img src={img} alt=" " /></figure>
          </PhotoView>
          
      </div>
    </PhotoProvider>


            {/* <figure><img src={img} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>{description.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                       <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
         
        </div>
          
        
    );
};

export default ServiceCard;