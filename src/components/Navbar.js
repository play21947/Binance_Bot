import { useNavigate } from "react-router-dom"

const Navbar = () => {

    let navigate = useNavigate()

    return (
        <div>
            <div className="navbar">
                <p onClick={()=>{
                    navigate("/")
                }} className="binance">PLAY2-BINANCE</p>

                <div className="sign-form">
                    <p onClick={()=>{
                        navigate('/sign_in')
                    }} className="sign-in">เข้าสู่ระบบ</p>
                    <p className="sign-space">|</p>
                    <p onClick={()=>{
                        navigate('/sign_up')
                    }} className="sign-up">สมัครสมาชิก</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar