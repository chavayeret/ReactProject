import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import dataStore from "../../data/dataStore";

const AddService = observer(({onAdd})=>{ 
  const [service,setService]=useState(dataStore.services);
  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.addService(service);
    onAdd(false)
 }

 const handleChange = (event) => {
    const { name, value } = event.target.value;
    setService({ ...service, [name]: value });
 }

return (
<>
 <form className="form" onSubmit={handleSubmit} >
    <label>
      <input type='text' name='name' value={service.name} onChange={handleChange} placeholder="השפה"/>
    </label>
    <br />
    <label>
        <input type='text' name='description' value={service.description} onChange={handleChange} placeholder="תאור" />
    </label>
    <br />
    <label>
        <input type='namber' name='price' value={service.price} onChange={handleChange} placeholder="מחיר" />
    </label>
    <br />
    <label>
        <input type='number' name='duration' value={service.duration} onChange={handleChange} placeholder="משך פגישה"/>
    </label>
    <br />
    <Button type='submit'>שמור</Button>
  </form>
</>
)})
  
  export default AddService
  