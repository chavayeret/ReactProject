function MeetingList() {
  fetch('https://localhost:8787/appointments')
       .then(response => response.json())
       .then(dataMeeting => consol.log(dataMeeting))
       .catch(error => console.error('Error:', error));
  return (
    <>
    {dataMeeting}
    </>
  )
}
  
  export default MeetingList
  