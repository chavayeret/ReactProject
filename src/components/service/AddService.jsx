
import Service from "./Service"
import ServicesList from "./ServicesList";

async function AddService(service) {
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
  
    return (
      <>
      dataStore.isLogin?   
      <ServicesList/>
      <button onClick={<Service/>}>הוסף שירות</button>:
      <ServicesList/>;
      </>
    )
  }
  
  export default AddService
  