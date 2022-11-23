import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { SignUpService } from "../services/services"
import Swal from 'sweetalert2'

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
                        setEmail(email.target.value)
                    }} placeholder="อีเมลผู้ใช้"></input>
                    <input onChange={(password)=>{
                        setPassword(password.target.value)
                    }} placeholder="รหัสผ่าน"></input>
                    <input onChange={(cfpassword)=>{
                        setCFPassword(cfpassword.target.value)
                    }} placeholder="ยืนยันรหัสผ่าน"></input>
                    <button onClick={()=>{
                        if(email && password && CFPassword){
                            if(password == CFPassword){
                                SignUpService(email, password).then((res)=>{
                                    if(res.inserted){
                                        Swal.fire("สมัครสมาชิกเสร็จสิ้น")
                                    }else{
                                        Swal.fire("มีผู้ใช้อีเมลนี้อยู่เเล้ว")
                                    }
                                })
                            }else{
                                Swal.fire("รหัสผ่านไม่ตรงกัน")
                            }
                        }else{
                            Swal.fire("โปรดกรอกข้อมูลให้ครบถ้วน", '', 'warning')
                        }
                    }}>สมัครสมาชิก</button>
                    <div className="sign-in-ask-warp">
                        <p className="sign-in-ask">Have an account already?</p>
                        <p onClick={() => {
                            navigate("/sign_in")
                        }} className="sign-in-ask-click">SignUp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp