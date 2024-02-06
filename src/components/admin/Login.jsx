import { observer } from "mobx-react-lite"
import { Button } from "@mui/material"
//  import {dataStore} from "../../data/dataStore"
import { CheckLogin } from "../../data/server"
import { useState } from "react"



const Login = (observer(() => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}>שם משתמש</input>
            <input type="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>סיסמא</input>
            <Button onClick={() => CheckLogin({name},{password} )}> login</Button>
        </>
    )
}))

export default Login
