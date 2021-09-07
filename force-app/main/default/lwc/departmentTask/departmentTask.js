import { LightningElement,track, wire } from 'lwc';
import getDepartmentRecord from '@salesforce/apex/departmentController.getDepartmentRecord';
export default class DepartmentTask extends LightningElement {

    
    @track columns = [{
        label: 'OnBoarding Step Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    }
];

    @track error;
    @track departmentList ;
    @wire(getDepartmentRecord)
    wiredAccounts({
        error,
        data
    }) {
        if (data) {
        this.departmentList = data;
        } else if (error) {
        this.error = error;
    }
}
   



}