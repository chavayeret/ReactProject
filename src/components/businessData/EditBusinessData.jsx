import {useState} from "react";
import {observer } from "mobx-react";
import {Button} from "@mui/material";
import dataStore from "../../data/dataStore";
import "../../index.css";

const EditBusinessData=(observer(({onSave})=> {
  
  const [business, setBusineess] = useState(dataStore.getBusinessData);
  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.setBusinessData(business);
    onSave(false)
    console.log(business);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBusineess({ ...business, [name]: value });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          שם העסק:
          <input type='text' name='name' value={business.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          כתובת:
          <input type='text' name='address' value={business.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          טלפון:
          <input type='text' name='phone' value={business.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          בעל העסק:
          <input type='text' name='owner' value={business.owner} onChange={handleChange} />
        </label>
        <br />
        <label>
          לוגו:
          <input type='text' name='logo' value={business.logo} onChange={handleChange} />
        </label>
        <br />
        <label>
          תיאור:
          <input type='text' name='description' value={business.description} onChange={handleChange} />
        </label>
        <br />
        <Button type='submit'>שמור</Button>
      </form>
    </>
  )


}))

export default EditBusinessData
