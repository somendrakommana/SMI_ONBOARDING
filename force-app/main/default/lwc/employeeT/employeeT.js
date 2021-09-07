import { LightningElement, api } from 'lwc';

export default class EmployeeT extends LightningElement {


    @api employeeRecord;
    handleDetails(){
        
    }

    handleOpenRecordClick() {
        console.log(this.employeeRecord.Name)
        
        const selectEvent = new CustomEvent('employeeview', {
            detail: this.employeeRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }



}