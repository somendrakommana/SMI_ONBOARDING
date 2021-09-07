public with sharing class onboardingController1 {
    public onboardingController1() {

    }
    @AuraEnabled(cacheable=true)
    public static List<User_Job_Role__c> getList(){
        
        List<User_Job_Role__c> extenddate = [Select New_Joinee__r.Name, Onboarding_end_date__c, Onboarding_Start_Date__c FROM User_Job_Role__c ];
        
        return extenddate;
    }
}
