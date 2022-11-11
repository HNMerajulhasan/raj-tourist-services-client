import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/services',
            element:<Services></Services>
         },
         {
            path:'/services/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params})=>fetch(`https://raj-tourist-services-server.vercel.app/Allservices/${params.id}`) 
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/signUp',
            element:<SignUp></SignUp>
         },
         {
            path:'/myReviews',
            element:<PrivateRoute> <MyReview></MyReview></PrivateRoute>
         },
         {
            path:'/update/:id',
            element:<Update></Update>,
            loader: ({params}) => fetch(`https://raj-tourist-services-server.vercel.app/reviews/${params.id}`)
         },
         {
            path:'/addServices',
            element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
         },
         {
            path:'/blog',
            element:<Blog></Blog>
         },
         {
            path:'/services/:id',
            element:<AddServices></AddServices>,
            loader:({params})=>fetch(`https://raj-tourist-services-server.vercel.app/Allservices/${params.id}`) 
         }
       ]
    }
])

export default router;