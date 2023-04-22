import { Route, Routes} from "react-router-dom"
import Register from "./components/Pages/Authentication/Register"
import LogIn from "./components/Pages/Authentication/LogIn"
import Home from "./components/Pages/home/Home"
import Navbar from "./components/shared/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import MyOrder from "./components/dashboard/MyOrder"
import AddProducts from "./components/dashboard/AddProducts"

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="orders" element={<MyOrder />}></Route>
          <Route path="add-products" element={<AddProducts />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
