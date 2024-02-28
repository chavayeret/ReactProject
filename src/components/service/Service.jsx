import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import AddService from "./AddService";
import dataStore from "../../data/dataStore";
import "./ServicesList.css"
import "../../index.css"

const Service = observer(() => {
  const [addMode, setaddMode] = useState(false);

  const dataS = dataStore.services;

  return (
    <>
      <div className="Serv">
        {dataS.map((dataS, i) => {
          return <div className="serv" key={i} >
            <h3>שפת {dataS.name},</h3>
            <h3>{dataS.description},</h3>
            <h3>המחיר: {dataS.price} ש"ח,</h3>
            <h3>משך השיעור: {dataS.duration} דקות.</h3>
          </div>
        })}
      </div>

      {dataStore.isLogin &&
        <div>
          {addMode ? <AddService onAdd={setaddMode} /> : <Button onClick={() => setaddMode(true)}>הוסף שירות</Button>}
        </div>
      }
    </>
  )
})

export default Service
