import axios from 'axios';
import {toast} from 'react-toastify'

export const addSponsor = (params, cb, errCb) =>{
    const respose = axios.post('/api/sponsor', params)
    .then(res =>{
        if(cb) cb()
        // toast.success(res.data.message)
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        return  e.response ? e.response.data : null
    })

    return{
        type:"ADD_SPONSOR",
        pyload:respose
    }
}

export const getAllSponsors = (cb, errCb) =>{
    const respose = axios.get('/api/sponsor')
    .then(res =>{
        console.log(res.data)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        // toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"GET_ALL_SPONSORS",
        payload:respose
    }
}

export const getOneSponsors = (id, cb, errCb) =>{
    const respose = axios.get(`/api/sponsor/:${id}`)
    .then(res =>{
        console.log(res.data)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"GET_ONE_SPONSOR",
        payload:respose
    }
}