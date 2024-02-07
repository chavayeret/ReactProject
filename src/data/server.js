import axios from "axios";
import Login from "../components/admin/Login";
import dataStore from "./dataStore";

export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("https://localhost:8787/login", { name, password });
        if (isValid.status === 200) {
            dataStore.setIsLogin(true);
        }
    }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
            setName('')
            setPassword('')  
        }
        else {
            alert('server failed');
        }
    }
}