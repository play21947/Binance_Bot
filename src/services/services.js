import axios from 'axios'

const end_point = 'http://localhost:3001/api'

export const SignUpService=(email, password)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${end_point}/sign_up`,{
            email: email,
            password: password
        }).then((res)=>{
            resolve(res.data)
        })
    })
}