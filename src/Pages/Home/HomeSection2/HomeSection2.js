import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeSection2 = ({service}) => {
    const{place_img,place_name,total_tourist,discount} = service; 
    return (
      
        <div className="card card-compact mx-7 bg-base-100 shadow-xl">


<PhotoProvider>
      <div className="foo">
       
          <PhotoView>
             <figure><img src={place_img} alt=" " /></figure>
          </PhotoView>
        
      </div>
    </PhotoProvider>


            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{place_name}</h2>
                    <p1 className='text-fuchsia-700'>Discount Offer {discount}% Off!</p1>
                    <p>Tourist Visited Per Year: {total_tourist}</p>
                </div>
            </div>
        
        </div>
    );
};

export default HomeSection2;