import axios from 'axios'

import {url, setHeaders} from "../../api"
import {toast} from "react-toastify"


export const getMytasks = () => {
    return (dispatch) => {
        axios
        .get(`${url}/mytasks`,setHeaders())
        .then((mytasks)=> {
          dispatch({
             type :  "GET_MYTASKS",
             mytasks
          })
        })
        .catch(error=>{
         console.log(error)
        })
 }
}

export const addMytask = (newMytask) => {
    return (dispatch , getState) => {
          const author = getState().auth.name
          const uid = getState().auth._id
           axios
           .post(`${url}/mytasks` , {...newMytask, author, uid}  ,setHeaders())
           .then((mytask)=> {
             dispatch({
                type :  "ADD_MYTASK",
                mytask
             })
           })
           .catch(error=>{
            console.log(error.response)
            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            } )
           })
    } 
}


export const updateMytask = (updatedMytask, id) => {
    return (dispatch) => {
           axios
           .put(`${url}/mytasks/${id}` , updatedMytask , setHeaders())
           .then((mytask)=> {
             dispatch({
                type :  "UPDATE_MYTASK",
                mytask
             })
           })
           .catch(error=>{
            console.log(error.response)
            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            } )
           })
    } 
}



export const checkMytask = (id) => {
    return (dispatch) => {
           axios
           .patch(`${url}/mytasks/${id}` , {}, setHeaders())
           .then((mytask)=> {
             dispatch({
                type :  "CHECK_MYTASK",
                mytask
             })
           })
           .catch(error=>{
            console.log(error.response)
            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            } )
           })
    } 
}




export const deleteMytask = (id) => {
    return (dispatch) => {
           axios
           .delete(`${url}/mytasks/${id}` ,setHeaders())
           .then(()=> {
             dispatch({
                type :  "DELETE_MYTASK",
                id
             })
           })
           .catch(error=>{
            console.log(error.response)
            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            } )
           })
    } 
}
