import BusinessData from "./BusinessData"

async function EditBusinessData(_event) {
   
    try{
      const response=await fetch('https://localhost:8787/BusinessData',{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:'value'})
      });
      const data=await response.json();
      console.log(data);
    }catch(error){
      console.error('Error:',error);
    }
    return (
      <>
      {data}
      <button onClick={<BusinessData/>}>עריכה</button>
      </>
    )
}


  
  export default EditBusinessData
  