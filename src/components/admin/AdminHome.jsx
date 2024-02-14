import { Button } from "@mui/material"
import BusinessData from "../businessData/BusinessData"
import Service from "../service/Service"
import Meeting from "../meeting/Meeting"
import { useState } from "react"

function AdminHome() {
const [Mlist , setMlist]= useState(false);
const [Slist , setSlist] = useState(false);
    return (
        <>
            <BusinessData />  
            {Mlist ? <Service onMlist = {setMlist}/>:<Button onClick = {()=>{setMlist(true)}}>שירותים</Button>}
            {Slist ? <Meeting onSlist = {setSlist}/>:<Button onClick={()=>{setSlist(true)}}>פגישות</Button>}  
        </>
    )
}

export default AdminHome
