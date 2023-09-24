## Get the projects list
curl "https://script.google.com/macros/s/AKfycbz3B7T_MbVn8-ouQaieSRQ3jeSfGxajJ6nqRdw_zMxXFCBgMTQPmp9UvNzOF6uQEpsq/exec?action=get-projects" \
-H "Accept: application/json"  -L

## Posting a new project
curl -X POST "https://script.google.com/macros/s/AKfycbz3B7T_MbVn8-ouQaieSRQ3jeSfGxajJ6nqRdw_zMxXFCBgMTQPmp9UvNzOF6uQEpsq/exec?action=add-project" \
 -H 'Content-Type: application/json'  -L \
 -d '{"TimeStamp":"","Title":"Report Management System","Company":"TechCorp","Goal":"To manage inventory efficiently","Tasks":"1. Develop UI 2. Create Database 3. Implement features 4. Testing","Technology":"Java","Minimum_Team":"3","Date_Added":"2023-09-24","Duration":"8 weeks","Details_Link":"http://techcorp.com/projects/inv_mgmt","Contact_Phone":"555-1234","Contact_Email":"project@techcorp.com","Contact_Name":"John Doe","Active":""}'

## To get access token
Required only for accessing AppScript '/dev' endpoints for POST
https://script.google.com/macros/s/AKfycbyZ_-aV8z8CaVCDETY9_JQL1MaXCEKYq2E-c3T_Coqc6M78s4GghBBGlDpD4viXpmVL/exec?action=access-token

## Reference links
 - https://github.com/tanaikech/taking-advantage-of-Web-Apps-with-google-apps-script/blob/master/README.md
 - https://gist.github.com/nyancodeid/abc7f2c3ce47eda753dee8a2b63070ab
 - https://stackoverflow.com/questions/45534493/using-authtoken-obtained-via-scriptapp-getauthtoken-to-call-web-apps-in-gas
