import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchMentor from '@salesforce/apex/mentorController.searchMentor';

export default class ManagerHome extends NavigationMixin(LightningElement) {

    @track mentorRecords;
    @track errors;
    @api objectApiName = "User_Job_Role__c";
    @api objectApiRef = "Job_Role_Onboarding_Step__c";
    @api objectApi = "Assign_task__c";
    
    

    @wire(searchMentor)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.mentorRecords =data;
            this.errors = error;
        }

    handleEvent(event)
    {
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchMentor({
        searchParam : eventVal
    
        })
    
        .then(result => {
    
            console.log('Mentor Record', result);
            this.mentorRecords = result;
            this.errors = undefined;
                
        })
    
        .catch(error =>{
    
            console.log('Error',error);
            this.errors = error;
            this.mentorRecords = undefined;
                
            })
    }


    handleMentorView() {
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes: {
				objectApiName: 'User_Job_Role__c',
				actionName: 'list',
			}
		});
	}


    handleSuccess(){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
        eval("$A.get('e.force:refreshView').fire();");
    }
}