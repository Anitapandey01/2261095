const axios = require('axios');
const requestBody = {email: "anitaanu1904@gmail.com",
    name:"Anita Pandey",
mobileNo : "9756176204",
githubUsername:"Anitapandey01",
rollno:"2261095",
accessCode:"QAhDUr"};
const url='http://20.244.56.144/evaluation-service/register';
axios.post(url,requestBody).then(response=>{console.log('registration successful');
    console.log('response:');
    console.log(JSON.stringify(response.data,null,2));
    console.log('\n imp:save your clientId and cilentSecret NOw');
}).catch(error=>{console.error('registration failed ');
    if(error.response){
        console.error('status:',error.response.status);
        console.error('data:',error.response.data);
    }else{
        console.error(error.message);
    }
});