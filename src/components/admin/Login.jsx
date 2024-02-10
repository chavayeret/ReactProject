import { observer } from "mobx-react-lite"
import { useState } from "react"
import { CheckLogin } from "../../data/server"




const Login = (observer(() => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}>שם משתמש</input>
            <input type="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>סיסמא</input>
            <button onClick={() => CheckLogin({name},{password} )}> login</button>
        </>
    )
}))

export default Login
