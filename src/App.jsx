import { Route, Routes } from "react-router-dom"
import Register from "./components/Pages/Authentication/Register"
import LogIn from "./components/Pages/Authentication/LogIn"

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
