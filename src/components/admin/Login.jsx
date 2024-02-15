import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Button } from "@mui/material"
import { CheckLogin } from "../../data/server"




const Login = (observer(() => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
             <p>כניסה למשתמש מורשה בלבד!</p>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="שם משתמש"/>
            <br/>
            <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="סיסמא" />
            <br/>
            <Button onClick={() => CheckLogin(name, password )}>להתחברות</Button>
        </>
    )
}))

export default Login
