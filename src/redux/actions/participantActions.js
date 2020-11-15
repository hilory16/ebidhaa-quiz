import axios from 'axios';
import {toast} from 'react-toastify'

export const addParticipant = (params, cb, errCb) =>{
    const response = axios.post('/api/participant', params)
    .then(res =>{
        if(cb) cb() 
        // toast.success(res.data.message)
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })

    return{
        type:"ADD_PARTICIPANT",
        pyload:response
    }
}

export const getAllParticipants = (cb, errCb) =>{
    const response = axios.get('/api/participant')
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
        type:"GET_ALL_PARTICIPANTS",
        payload:response
    }
}

export const getOneParticipant = (id, cb, errCb) =>{
    const response = axios.get(`/api/participant/${id}`)
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
        type:"GET_ONE_PARTICIPANT",
        payload:response
    }
}

export const updateParticipant = (id, params, cb, errCb) =>{
    const response = axios.put(`/api/participant/${id}`, params)
    .then(res =>{
      
        console.log(res.data)
        toast.success(res.data.message)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"UPDATE_PARTICIPANT",
        payload:response
    }
}