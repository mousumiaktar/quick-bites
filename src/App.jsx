import { Route, Routes } from "react-router-dom"
import Register from "./components/Pages/Authentication/Register"
import LogIn from "./components/Pages/Authentication/LogIn"
import Home from "./components/Pages/home/Home"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import RestaurantsFood from "./components/Pages/orderNow/RestaurantsFood"
import Dashboard from "./components/Pages/dashboard/Dashboard"
import Welcome from "./components/Pages/dashboard/Welcome"
import Profile from "./components/Pages/dashboard/user/Profile"
import MyOrder from "./components/Pages/dashboard/user/MyOrder"
import AddReview from "./components/Pages/dashboard/user/AddReview"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurantfood/:id" element={<RestaurantsFood />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Welcome />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
