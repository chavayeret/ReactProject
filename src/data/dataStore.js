import { makeObservable, observable, action, computed } from 'mobx';

class DataStore {
    isLogin = false;
    businessData = {};
    services =[];
    meetings = [];
    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                setIsLogin: action,
                businessData: observable,
                setBusinessData: action,
                getBusinessData: computed,
                init: action,
                meetings: observable,
                services: observable,
                getMeetings: action,
                addMeeting: action,
                getServices: action,
                addService: action,
            }
        );
        this.init();
        this.getServices();
        this.getMeetings();
    }

    setIsLogin(status) {
        this.isLogin = status;
    }

    async init(){
        try{
            const response = await fetch('http://localhost:8787/BusinessData');
            const data = await response.json();
            if (Object.keys.length === 0){
                this.setBusinessData({
                    name: "תכנות בקלות",
                    address: "הרב יעקב לנדא 9 בני ברק",
                    phone: "052-7162595",
                    owner: "חוה ירט",
                    logo: "",
                    description: "מורה פרטית לשפות התכנות",
                  });
            }
            else
                this.businessData = data;
           console.log(" this.businessData :",  this.businessData )
        }catch(error){
           console.error('Error:',error);
        }  
    }

    get getBusinessData(){
        return this.businessData;
    }

    async setBusinessData(obj){
    try{
        const response = await fetch('http://localhost:8787/BusinessData',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
        });
        const data = await response.json();
        this.businessData = data;
    }catch(error){
       console.error('Error:',error);
    }
    }
    
    async addService(obj){
    try{
        const response = await fetch('http://localhost:8787/Service',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
        });
        const dataService=await response.json();
        console.log("dataService",dataService);
        this.services = dataService;
        
    }catch(error){
       console.error('Error:',error);
    }
    }
    
    async getServices(){
    try{    
        const response = await fetch('http://localhost:8787/Services');
        const dataservice = await response.json();
        console.log("dataservice" ,dataservice);
        this.services = dataservice;
        console.log("services" ,this.services);
    }catch(error){
        console.error('Error:',error);
    }
    }

    async getMeetings() {
    try{
        const response = await fetch('http://localhost:8787/appointments');
        const dataMeeting = await response.json();
        console.log("dataMeeting" ,dataMeeting);
        this.meetings = dataMeeting;
        console.log("meetings" ,this.meetings);
    }catch(error){
            console.error('Error:',error);
    }
    }
    
    async addMeeting(obj){
    try{
        const response = await fetch('http://localhost:8787/appointment',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
        });
        const datameeting=await response.json();
        console.log("datameeting",datameeting);
        this.meetings = datameeting;
        alert("הפגישה נקבעה בהצלחה")
    }catch(error){
        console.error('Error:',error);
        alert("התאריך תפוס",this.meetings.status)
    }
    }
}
export default new DataStore();