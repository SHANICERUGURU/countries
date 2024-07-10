import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CountriesContainer from './components/countriescontainer.jsx';
import CountryProfile from './components/countryprofile.jsx';
import ErrorPage from './components/errorpage.jsx';
import Continents from './components/continents.jsx';
import Border from './components/border.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<CountriesContainer/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/home',
    element:<CountriesContainer/>
  },
  {
    path:'/countryprofile',
    element:<CountryProfile/>
  },
  {
    path:'/continents',
    element:<Continents/>
  },
  {
    path:'/border',
    element:<Border/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
