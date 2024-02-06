import Meeting from "./Meeting";
import MeetingList from "./MeetingList";


async function AddMeeting() {
    
    try{
      const response=await fetch('https://localhost:8787/appointment',{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:'value'})
      });
      const dataMeeting=await response.json();
      console.log(dataMeeting);
    }catch(error){
      console.error('Error:',error);
    }
    return (
      <>
      dataStore.isLogin?
      <MeetingList/>:
      <button onClick={<Meeting/>}>קבע פגישה</button>;
      </>
    )
  
} 
  export default AddMeeting
  