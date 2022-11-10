import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeSection3 = ({service}) => {
    const{new_ser_description,
        new_ser_img,
        new_ser_price,
        new_service_name} = service; 
    return (
        <div className="card card-compact mx-7 bg-base-100 shadow-xl">


        <PhotoProvider>
              <div className="foo">
               
                  <PhotoView>
                     <figure><img src={new_ser_img} alt=" " /></figure>
                  </PhotoView>
                
              </div>
            </PhotoProvider>
        
        
                    <div className="card w-96 bg-base-100 shadow-xl ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{new_service_name}</h2>
                            <p1 className='text-fuchsia-700'>Price :$ {new_ser_price}</p1>
                            <p>{new_ser_description}</p>
                        </div>
                    </div>
                
                </div>
    );
};

export default HomeSection3;