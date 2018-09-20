var axios = require('axios');
var util = require('util');
axios.defaults.withCredentials=true;
const base_axios = axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'no-cors',
    },
    timeout: 1000
});

const postPromise = (url,postData=null) => new Promise((resolve,reject)=>{
    base_axios.post(url,postData).then(res=>{resolve(res)}).catch(err=>reject(err));
});

const isAuthorized= async ()=>{
    try{
        let res= await postPromise("/validate");
        return res.data;
    }catch (e) {
        console.error(e);
    }
}

const login = async (userInfo)=>{
    try{
        let res = await postPromise("/login",userInfo);
        return res.status;
    }catch (e) {
        console.error(e);
        throw new Error(e);
    }
}

export default {isAuthorized,login};