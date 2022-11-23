import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { SignUpService } from "../services/services"

const SignUp = () => {

    let navigate = useNavigate()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [CFPassword, setCFPassword] = useState('')


    return (
        <div>

            <Navbar/>

            <div className="sign-in-bg">
                <div className="sign-in-box">
                    <p className="sign-in-header">การสมัครสมาชิก</p>
                    <input onChange={(email)=>{
                        setEmail(email)
                    }} placeholder="อีเมลผู้ใช้"></input>
                    <input onClick={(password)=>{
                        setPassword(password)
                    }} placeholder="รหัสผ่าน"></input>
                    <input onClick={(cfpassword)=>{
                        setCFPassword(cfpassword)
                    }} placeholder="ยืนยันรหัสผ่าน"></input>
                    <button onClick={()=>{
                        SignUpService(email, password)
                    }}>เข้าสู่ระบบ</button>
                    <div className="sign-in-ask-warp">
                        <p className="sign-in-ask">Have an account already?</p>
                        <p onClick={() => {
                            navigate("/sign_in")
                        }} className="sign-in-ask-click">SignIn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp