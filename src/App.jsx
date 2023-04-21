import { Route, Routes } from "react-router-dom"
import Register from "./components/Pages/Authentication/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
