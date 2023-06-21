import {RouterProvider , createBrowserRouter} from "react-router-dom";
import './App.css';
import Root from "./components/Root";
import Login from "./components/Login";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children : [
      {index: true, element: <Login></Login>},
      {path: 'home', element: <Home></Home>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
