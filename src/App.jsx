import { Route, Routes } from "react-router-dom"
import Register from "./components/Pages/Authentication/Register"
import LogIn from "./components/Pages/Authentication/LogIn"
import Home from "./components/Pages/home/Home"
import Navbar from "./components/shared/Navbar"

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
