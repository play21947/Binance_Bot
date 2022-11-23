import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const SignIn = () => {

    let navigate = useNavigate()

    return (
        <div>

            <Navbar/>

            <div className="sign-in-bg">
                <div className="sign-in-box">
                    <p className="sign-in-header">การเข้าสู่ระบบ</p>
                    <input placeholder="อีเมล"></input>
                    <input placeholder="รหัสผ่าน"></input>
                    <button>เข้าสู่ระบบ</button>
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