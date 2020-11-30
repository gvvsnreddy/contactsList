component {
    this.name="contactListDemo";
    this.applicationTimeout = createTimeSpan( 0, 8, 0, 0 );
    
    public boolean function onApplicationStart() {
		
        structClear( application );
        application.contacts = [];
        
		return true;
	}
    
    function onRequestStart( page ) {
        if (structkeyexists(url, "clear") AND url.clear EQ "Tru3") {
			applicationStop();
			location ('./index.cfm');
			abort;
		}
    }
}
