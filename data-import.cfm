<cfscript>
    if(structKeyExists(application, "contacts")) {
        application.contacts = [];
    }
    local.usersList = 'Alex,987456321,alex09112020@gmail.com~John,9876781234,john@gmail.com~rick,9877651234,rick@gmail.com~Mike,8766782435,mike@gmail.com~Liam,8766788765,Liam@gmail.com~Noah,9877898765,Noah@gmail.com~William,0987876234,William@gmail.com~James,8766788765,James@gmail.com~Oliver,8766782345,Oliver@gmail.com~Lucas,9988776543,Lucas@gmail.com';
    local.usersStruct = listToArray(local.usersList,'~');
    for (local.key in local.usersStruct) {
        local.contactInfo = {id = createUUID(), name = GetToken(local.key,1,','), phone = GetToken(local.key,2,','), email = GetToken(local.key,3,',')};
        arrayAppend(application.contacts,local.contactInfo);    
    }
</cfscript>
Done!
