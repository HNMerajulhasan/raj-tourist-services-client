import { GoogleAuthProvider } from 'firebase/auth';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
const {login}=useContext(AuthContext);
const { setUser, signInWithGoogle } = useContext(AuthContext)
useTitle('Login')
const navigate = useNavigate()
const location = useLocation();
const from = location.state?.from?.pathname || '/'
const googleProvider = new GoogleAuthProvider()
const [errorMessage, setErrorMessage] = useState(false)

const handleLogin=event=>{
     event.preventDefault();
     const form=event.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password);
 
     login(email,password)
      .then(result=>{
         const user=result.user;
         console.log(user);
         form.reset();
         navigate(from, { replace: true })
      })
      .catch(error=>{
         console.error(error)
     });
}

const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
            navigate(from, { replace: true })

        })
        .catch(error => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage)
        })
}

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                   <img className='w-3/4' src={loginImg} alt=" "/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login now!</h1> 
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>New to My Tourist Service?<Link className='text-orange-600 font-bold ml-2' to='/signup'>Sign Up</Link></p>
                    <MDBBtn className='m-5' style={{ backgroundColor: 'red' }} onClick={handleGoogleSignIn} >
                       <MDBIcon fab icon="google" className="mx-2" />
                           Continue with google
                     </MDBBtn>
                </div>
            
            </div>
           
        </div>
    );
};

export default Login;