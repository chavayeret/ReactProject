import { makeObservable, observable, action } from 'mobx';

class DataStore {
    isLogin = false;
    businessData = {};
    services = [];
    meetings = [];
    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                setIsLogin: action,
                businessData: observable,
                setBusinessData: action,
                getBusinessData: action,
                meetings: observable,
                getMeetings: action,
                addMeeting: action,
                services: observable,
                getServices: action,
                addService: action,
            }
        );
        this.getBusinessData();
        this.getServices();
        this.getMeetings();
     
    }

    setIsLogin(status) {
        this.isLogin = status;
    }
   

    async getBusinessData() {
        try {
            const response = await fetch('http://localhost:8787/BusinessData');
            const data = await response.json();
            if (!data.JSON ){
                this.setBusinessData({name: "תכנות בקלות",
                address: "הרב יעקב לנדא 9 בני ברק",
                phone: "052-7162595",
                owner: "חוה ירט",
                logo: "",       
                description: "מורה פרטית לשפות התכנות",
                })
            }
            else{
                 this.businessData = data;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async setBusinessData(obj) {
        try {
            const response = await fetch('http://localhost:8787/BusinessData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            const data = await response.json();  
            this.businessData =data;
                    
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async addService(obj) {
        try {
            const response = await fetch('http://localhost:8787/Service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }); 
            this.services = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getServices() {
        try {
            const response = await fetch('http://localhost:8787/Services');
            
            this.services = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async addMeeting(obj) {
        try {
            const response = await fetch('http://localhost:8787/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
             
            this.meetings = await response.json();
            if(this.meetings.status === 200){
                console.log("datameeting" ,this.meetings)  
                 alert("הפגישה נקבעה בהצלחה!");
            }
            else{
                console.log("datameetingelse" ,this.meetings)  
                alert("לא ניתן לקבוע את הפגישה בשעה המבוקשת, נסו שנית!")
            }
        
            
        } catch (error) {
            if(error.response){
            console.error("Error",error);
            alert("לא ניתן לקבוע את הפגישה בשעה המבוקשת, נסו שנית!")
            }
        }
    }

    async getMeetings() {
        try {
            const response = await fetch('http://localhost:8787/appointments'); 
            this.meetings = await response.json();
            this.meetings.sort((a,b)=>new Date(a.dateTime)-new Date(b.dateTime));

        } catch (error) {
            console.error('Error:', error);
        }
    }

}
export default new DataStore();