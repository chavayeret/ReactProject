
import Service from "./Service"
import ServicesList from "./ServicesList";

async function AddService() {
  
    try{
      const response=await fetch('https://localhost:8787/service',{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:'value'})
      });
      const dataService=await response.json();
      console.log(dataService);
    }catch(error){
      console.error('Error:',error);
    }  
  }
    return (
      <>
      <ServicesList/>
      <button onClick={<Service/>}>הוסף שירות</button>
      </>
    )
  
  
  export default AddService
  