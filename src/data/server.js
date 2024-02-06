import axios from "axios";
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
        }
        else {
            alert('server failed');
        }
    }
}