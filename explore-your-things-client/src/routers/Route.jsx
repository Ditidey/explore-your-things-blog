import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Err/Error";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <Error></Error>,
      children: [
        
      ]
    },
  ]);

  export default router;