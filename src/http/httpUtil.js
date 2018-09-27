var axios = require('axios');
var util = require('util');
axios.defaults.withCredentials=true;
const base_axios = axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'no-cors',
    },
    timeout: 10000
});

const postPromise = (url,postData=null) => new Promise((resolve,reject)=>{
    base_axios.post(url,postData).then(res=>{resolve(res)}).catch(err=>reject(err));
});

const getPromise = (token,url) => {
    const get_axios = axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Content-Type':'application/json',
        'Authorization':token,
    },
    timeout: 10000
    });
    return new Promise((resolve,reject)=>{
        get_axios.get(url).then(res=>{resolve(res)}).catch(err=>reject(err));
    })
}

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
        return res;
    }catch (e) {
        //console.log("login response is "+util.inspect(e,{depth:5}));
        return e.response;
    }
}

const getSearchData = async (token,value)=>{
    try{
        let res = await getPromise(token,"/order/"+value);
        console.log("search response is "+util.inspect(res,{depth:5}));
        return res.data;
    }catch (e) {
        console.error("e is "+util.inspect(e,{depth:5}));
        return e.response.data;
    }
}

export default {isAuthorized,login,getSearchData};