import { useState } from "react"
import { Observer } from "mobx-react";
import AddService from "./AddService";

const Service=(Observer(({func})=>{ 
   const [service,setService]=useState({
     name:"",
     description:"",
     price:0 ,
     duration:60,
   });
  
  

 const handleSubmit = (event) => {
    event.preventDefault();
    func()
    AddService(service);
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
      description:
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
)}))
  
  export default Service
  