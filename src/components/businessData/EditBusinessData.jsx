import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import dataStore from "../../data/dataStore";
import "../../index.css";

const EditBusinessData = (observer(({ onSave }) => {

  const [business, setBusiness] = useState(dataStore.businessData)
 
  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.setBusinessData(business);
    onSave(false)
    console.log(business);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBusiness({ ...business, [name]: value });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input type='text' name='name' value={business.name} onChange={handleChange}placeholder= "שם העסק" />
        </label>
        <br />
        <label>
          <input type='text' name='address' value={business.address} onChange={handleChange}placeholder= "כתובת" />
        </label>
        <br />
        <label>
          <input type='text' name='phone' value={business.phone} onChange={handleChange}placeholder= "טלפון" />
        </label>
        <br />
        <label>
          <input type='text' name='owner' value={business.owner} onChange={handleChange}placeholder=  "בעל העסק" />
        </label>
        <br />
        <label>
          <input type='text' name='logo' value={business.logo} onChange={handleChange}placeholder= "לוגו" />
        </label>
        <br />
        <label>
          <input type='text' name='description' value={business.description} onChange={handleChange}  placeholder="תאור"/>
        </label>
        <br />
        <Button type='submit'>שמור</Button>
      </form>
    </>
  )

}))

export default EditBusinessData
