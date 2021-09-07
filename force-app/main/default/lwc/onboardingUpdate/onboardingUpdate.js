import { LightningElement, api } from 'lwc';

export default class OnboardingUpdate extends LightningElement {



    @api objectApiName = "User_Job_Role__c";

    handleSubmit(){
        console.log(' Submit')
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);

    }
    handleSuccess(){
        console.log(' Record Created!!! ')
        const toast1 = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast1);
    }

    handleError(){
        console.log('error')
        const toast3 = new ShowToastEvent({
            'title' : 'Failed',
            "message" : 'Record Creation Failed',
            "variant" : "error",
            
        });
        this.dispatchEvent(toast3);
    }

}