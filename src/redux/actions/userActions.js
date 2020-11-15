import axios from 'axios';
import {toast} from 'react-toastify'

export const RegisterUser = (params, cb, errCb) =>{
    const respose = axios.post('/api/users', params)
    .then(res =>{
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
    })

    return{
        type:"REGISTER_USER",
        payload:respose
    }
}

export const loginUser = (params, cb, errCb) =>{
    const respose = axios.post('/api/auth', params)
    .then(res =>{
        // console.log(res.data)
        localStorage.setItem("auth", res.data.token)
        toast.success("Login Successful! You'll redirected in 3sec.")
        setTimeout(() =>{
            window.location = '/admin/dashboard'
        }, 3000)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"LOGIN_USER",
        payload:respose
    }
}

export const getAuthenticatedUser = (params, cb, errCb) =>{
    const respose = axios.get('/api/users/profile')
    .then(res =>{
        // console.log(res.data)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"GET_AUTHENTICATED_USER",
        payload:respose
    }
}



export const getAllAdmins = (cb, errCb) =>{
    const respose = axios.get('/api/users')
    .then(res =>{
        // console.log(res.data)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"GET_ALL_ADMINS",
        payload:respose
    }
}

export const deleteUser = (id, cb, errCb) =>{
    const respose = axios.delete(`/api/users/${id}`)
    .then(res =>{
        // console.log(res.data)
        if(cb) cb() 
        return res.data
    })
    .catch(e =>{
        if(errCb) errCb()
        toast.error(e.response ? e.response.data.message : null)
        return  e.response ? e.response.data : null
    })
    return{
        type:"DELETE_USER",
        payload:respose
    }
}