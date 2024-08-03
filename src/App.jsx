import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Start from "./Start"
import Lay from "./Lay"
import Proto from "./Proto"
import About from "./About"
import Contact from "./Contact"

function App() {
 const route =createBrowserRouter([
  {
    path:'',
    element:<Lay/>,
children:[
  {
    index:true,
    element:<Start/>,
  },
  {
    path:'/proto',
    element:<Proto/>,
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }

]
  }
 ])
  return (
    <>
        <RouterProvider router={route} />
    </>
  )
}

export default App
