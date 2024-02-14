import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import AddService from "./AddService";
import AdminHome from "../admin/AdminHome";
import dataStore from "../../data/dataStore";

const Service = observer(() => {
   const [addMode,setaddMode]=useState(false);
    const dataS = dataStore.services;
    console.log("dataS",dataS);
    //onSlist(false);
  
    return (
     <>
      <div >
        <h3>השפה{dataStore.services.name}</h3>
        <h3>תיאור{dataS.descripition}</h3>
        <h3>המחיר{dataS.price}</h3>
        <h3>משך הפגישה{dataS.duration}</h3>
      </div>
    
      
     { dataStore.isLogin && 
       <div>
         {addMode ? <AddService onAdd = {setaddMode} />:<Button onClick={() => setaddMode(true)}>הוסף שירות</Button>}
       </div>
       }
      </>
    )
  })
  
  export default Service
  