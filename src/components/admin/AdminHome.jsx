import { useState } from "react"
import { Button } from "@mui/material"
import BusinessData from "../businessData/BusinessData"
import Service from "../service/Service"
import Meeting from "../meeting/Meeting"


function AdminHome() {
const [Mlist , setMlist]= useState(false);
const [Slist , setSlist] = useState(false);

    return (
        <>
            <BusinessData />  
            {Slist ? <Service />:<Button onClick = {()=>{setSlist(true)}}>שירותים</Button>}
            {Mlist ? <Meeting />:<Button onClick={()=>{setMlist(true)}}>פגישות</Button>}
            {Slist && <Button onClick={()=>{setSlist(false)}}> סגור שירותים</Button>}  
            {Mlist && <Button onClick={()=>{setMlist(false)}}>סגור פגישות</Button>}
        </>
    )
}

export default AdminHome
