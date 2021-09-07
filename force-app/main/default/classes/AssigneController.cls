public with sharing class AssigneController {
    public AssigneController() {

    }
    
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchTask(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Onboarding_step__r.Name, Assign_to__r.Name From Assign_task__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Onboarding_step__r.Name, Assign_to__r.Name From Assign_task__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}

