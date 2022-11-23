import { Route, Routes } from "react-router-dom"
import LandingPage from "./screens/LandingPage"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import './App.css'
import { useEffect } from "react"

const App=()=>{

  return(
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/sign_in" element={<SignIn/>}></Route>
      <Route path="/sign_up" element={<SignUp/>}></Route>
    </Routes>
  )
}

export default App