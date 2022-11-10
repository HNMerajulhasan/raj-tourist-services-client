import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
const {user,logOut}=useContext(AuthContext);

const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}

 const menuItem=<>
   
   <li className='font-semibold'><Link to="/">Home</Link></li>
   { user?.email ?//user er moddhe jodi email address thake thle eigula path dekhabo ar na hle 
      <>
        <li className='font-semibold'><Link to="/myReviews">My Reviews</Link></li>
        <li className='font-semibold'><Link to="/addServices">Add Service</Link></li>
        <li className='font-semibold' ><Link onClick={handleLogOut}>LogOut</Link></li>
      </>
     :
     <li className='font-semibold'><Link to="/login">Login</Link></li>
    }
    <li className='font-semibold'><Link to="/blog">Blog</Link></li>
 </>

    return (
        <div className="navbar h-20  bg-green-500">
         <a href="https://flowbite.com/" className="flex items-center justify-start ml-5">
             <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=740&t=st=1668031296~exp=1668031896~hmac=4fb93127e4b72f314d5e571476feddcdebf3764402163e4b01017486ca7984c0" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Flowbite Logo" />
             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Raj Supreme Tourist Service</span>
           </a>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    {/* <img src={headerLogo} alt=" " /> */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;