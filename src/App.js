import {RouterProvider , createBrowserRouter} from "react-router-dom";
import './App.css';
import Root from "./components/Root";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children : [
      {index: true, element: <Login></Login>},
      {path: 'home', element: <Home></Home>},
      {path: 'detail/:id', element: <Detail></Detail>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
