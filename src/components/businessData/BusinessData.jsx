import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import EditBusinessData from "./EditBusinessData";
import dataStore from "../../data/dataStore";
import "../../index.css"

const BusinessData = observer(() => {
  const [editMode, setEditMode] = useState(false);
  
  const data = dataStore.businessData;

  return (
    <>
      <div>
        <h1>{data.logo}</h1>
        <h1>{data.name}</h1>
        <h3>{data.description}</h3>
        <h3>המורה {data.owner}</h3>
        <h3>{data.address}</h3>
        <h3>{data.phone}</h3>
      </div>

      {dataStore.isLogin &&
        <div>

          {editMode ? <EditBusinessData onSave={setEditMode} /> : <Button onClick={() => setEditMode(true)}>ערוך</Button>}
        </div>
      }
    </>
  )
});

export default BusinessData;
