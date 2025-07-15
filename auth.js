const axios= require('axios');
const requestBody={email:"anitaanu1904@gmail.com",
    name:"anita pandey",
    rollno:"2261095",
    accessCode:"QAhDUr",
    clientID:"d473dae8-764c-4d01-b07a-1b7f942bd076",
    clientSecret:"UNAaqwqHzQrMrrdF"
};
const url='http://20.244.56.144/evaluation-service/auth';
axios.post(url,requestBody).then(response=>{
    console.log('auth token retrieved');
    console.log('Response:');
    console.log(JSON.stringify(response.data,null,2));
    console.log('\n imp : save your acces token');
    console.log('you need it for all api calls');
}).catch(error=>{console.error('auth failed ');
    if(error.response){
        console.error('status:',error.response.status);
        console.error('data:',error.response.data);
    }else{
        console.error(error.message);
    }
});