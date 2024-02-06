import { useEffect, useState } from "react"
import AddService from "./AddService";

function Service() {
   const [service,setService]=useState({
     name:"",
     description:"",
     price:0 ,
     duration:60,
   });
  
  useEffect(()=>{localStorage.setItem(service,Service),[Service]})

 const handleSubmit = (event) => {
    event.preventDefault();
    AddService();
    console.log(service);
 }

 const handleChange = (event) => {
    const { name, value } = event.target;
    setService({ ...setService, [name]: value });
 }

return (
<>
 <form onSubmit={handleSubmit} >
    <label>
      name:
        <input type='text' name='name' value={service.name} onChange={handleChange} />
    </label>
    <br />
    <label>
      email:
        <input type='text' name='description' value={service.description} onChange={handleChange} />
    </label>
    <br />
    <label>
      price:
        <input type='namber' name='price' value={service.price} onChange={handleChange} />
    </label>
    <br />
    <label>
      duration:
        <input type='number' name='duration' value={service.duration} onChange={handleChange} />
    </label>
    <br />
    <button type='submit'>שמור</button>
  </form>
</>
)}
  
  export default Service
  