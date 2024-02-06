import { Button } from "@mui/material"
import BusinessData from "../businessData/BusinessData"
import ServiceList from "../service/ServicesList"
import MeetingList from "../meeting/MeetingList"

function AdminHome() {

    return (
        <>
            <BusinessData/>
            <Button onClick={<ServiceList/>}>רשימת שירותים</Button>
            <Button onClick={<MeetingList/>}>רשימת פגישות</Button>
        </>
    )
}

export default AdminHome
