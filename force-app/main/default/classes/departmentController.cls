public with sharing class departmentController {
    public departmentController() {

    }


    @AuraEnabled(cacheable=true)
    public static List<Onboarding_step__c> getDepartmentRecord()
   {
        return new List<Onboarding_step__c>([Select Name from Onboarding_step__c]);
    }
}
