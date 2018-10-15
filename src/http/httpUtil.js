var axios = require('axios');
var util = require('util');
axios.defaults.withCredentials=true;
const base_axios = axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
    },
    timeout: 10000,
    withCredentials:true
});

const postPromise = (url,postData=null) => new Promise((resolve,reject)=>{
    base_axios.post(url,postData).then(res=>{resolve(res)}).catch(err=>reject(err));
});

const getPromiseWoToken = (url,state=null) => new Promise((resolve,reject)=>{
    const base_axios = axios.create({
        baseURL:'http://localhost:8080',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'state':state
        },
        timeout: 10000,
        withCredentials:true,

    });
    base_axios.get(url).then(res=>{resolve(res)}).catch(err=>reject(err));
});

const getPromise = (token,url) => {
    const get_axios = axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Content-Type':'application/json',
        'Authorization':token,
    },
    timeout: 10000,
    withCredentials:true
    });
    return new Promise((resolve,reject)=>{
        get_axios.get(url).then(res=>{resolve(res)}).catch(err=>reject(err));
    })
}

const isAuthorized= async (state)=>{
    try{
        let res= await getPromiseWoToken("/validate",state);
        return res;
    }catch (e) {
        console.error(e);
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

export default {isAuthorized,getSearchData};