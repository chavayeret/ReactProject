import AddService from "./AddService";

function ServicesList() {
fetch('https://localhost:8787/services')
         .then(response => response.json())
         .then(dataService => consol.log(dataService))
         .catch(error => console.error('Error:', error));
    return (
      <>
      {dataService}
      
      </>
    )
  }
  
  export default ServicesList
  