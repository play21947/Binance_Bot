import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import Navbar from "../components/Navbar"
import { SignInService } from "../services/services"

const SignIn = () => {

    let navigate = useNavigate()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    return (
        <div>

            <Navbar/>

            <div className="sign-in-bg">
                <div className="sign-in-box">
                    <p className="sign-in-header">การเข้าสู่ระบบ</p>
                    <input onChange={(email)=>{
                        setEmail(email.target.value)
                    }} placeholder="อีเมล"></input>
                    <input onChange={(password)=>{
                        setPassword(password.target.value)
                    }} placeholder="รหัสผ่าน"></input>
                    <button onClick={()=>{
                        if(email && password){
                            SignInService(email, password).then((res)=>{
                                if(res.success){
                                    Swal.fire({position: 'center', icon: 'success', title: 'เข้าสู่ระบบเสร็จสิ้น', showConfirmButton: false, timer: 1500, timerProgressBar: true})
                                    setTimeout(()=>{
                                        localStorage.setItem('email', email)
                                        navigate('/home')
                                    }, 1500)
                                }else{
                                    Swal.fire({position: 'center', icon: 'error', title: 'ชื่อผู้ใช้หรือรหัสผ่านผิด', showConfirmButton: false, timer: 1500, timerProgressBar: true})
                                }
                            })
                        }else{
                            Swal.fire("กรุณากรอกข้อมูลให้ครบถ้วน")
                        }
                    }}>เข้าสู่ระบบ</button>
                    <div className="sign-in-ask-warp">
                        <p className="sign-in-ask">Don't have an account?</p>
                        <p onClick={() => {
                            navigate("/sign_up")
                        }} className="sign-in-ask-click">SignUp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn