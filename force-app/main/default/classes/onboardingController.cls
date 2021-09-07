public with sharing class onboardingController {
    public onboardingController() {



    }


    @AuraEnabled(cacheable=true)
    public static List<User_Job_Role__c> updateSingleRecord()
   {
        return new List<User_Job_Role__c>([Select New_Joinee__c, Onboarding_end_date__c, Onboarding_Status__c FROM User_Job_Role__c ]);
    }
    
}
