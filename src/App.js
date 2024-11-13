import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutme from './components/aboutme/Aboutme'
import Certifications from './components/certifications/Certifications';
import Home from './components/home/Home';
import RootLayout from './components/RootLayout';
import ErrorRoute from './components/ErrorRoute';

function App() {
 let router= createBrowserRouter([
  {
  path:'',
  element:<RootLayout />,
  errorElement: <ErrorRoute/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'aboutme',
      element:<Aboutme/>
    },
    {
      path:"certifications",
      element:<Certifications/>
    }
  ]
  }

 ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
