import { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import dataStore from "../../data/dataStore";

const AddService = observer(({onAdd})=>{ 
  const [service,setService]=useState(dataStore.getServices);
  alert(dataStore.getServices())
  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.addService(service);
    onAdd(false)
    console.log("service" ,service);
 }

 const handleChange = (event) => {
    const { name, value } = event.target;
    setService({ ...service, [name]: value });
 }

return (
<>
 <form onSubmit={handleSubmit} >
    <label>
      
      <input type='text' name='name' value={service.name} onChange={handleChange} placeholder= "השרות"/>
    </label>
    <br />
    <label>
      תאור:
        <input type='text' name='description' value={service.description} onChange={handleChange} />
    </label>
    <br />
    <label>
      מחיר:
        <input type='namber' name='price' value={service.price} onChange={handleChange} />
    </label>
    <br />
    <label>
      משך הפגישה:
        <input type='number' name='duration' value={service.duration} onChange={handleChange} />
    </label>
    <br />
    <Button type='submit'>שמור</Button>
  </form>
</>
)})
  
  export default AddService
  