import axios from 'axios';


const send = async ({method='', path='', data={}, access_token=''} = {}) => {
    const commonUrl = "http://localhost:3000";
    const url = commonUrl + path;

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "SameSite": "None",
        "Access-Control-Allow-Origin": commonUrl,
        "Access-Control-Allow-Credentials": true,
        "accept": "application/json",
        "Authorization": access_token
    }

    const options = {
        method,
        headers,
        data,
        url,
        withCrdentials: true,
    }

    try{
        const response = await axios(options);
        return response.data;
    }catch(error){
        console.log("Error in api", error);
        throw error;
    }

}



const getApi = ({path='', access_token=''} = {}) => {
    return send({method: 'GET', path, access_token});
}

const putApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'PUT', path, data, access_token});
}

const postApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'POST', path, data, access_token});
}

const delApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'DELETE', path, data, access_token});
}

export {
    getApi,
    putApi,
    postApi,
    delApi
}