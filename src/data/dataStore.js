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
            if (!data){
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
            const dataService = await response.json();
            this.services = dataService;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getServices() {
        try {
            const response = await fetch('http://localhost:8787/Services');
            const dataservice = await response.json();
            this.services = await dataservice;
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
            const datameeting = await response.json();
            this.meetings =await datameeting;
            
        } catch (error) {
            console.error("Error",error);
            alert("הפגישה נקבעה בהצלחה!");
        }
    }

    async getMeetings() {
        try {
            const response = await fetch('http://localhost:8787/appointments');
            const dataMeeting = await response.json();
            this.meetings = dataMeeting;
            this.meetings.sort((a,b)=>new Date(a.dateTime)-new Date(b.dateTime));

        } catch (error) {
            console.error('Error:', error);
        }
    }

}
export default new DataStore();