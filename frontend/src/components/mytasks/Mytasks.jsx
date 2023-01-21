import React , {useState} from 'react' ;
import AddMytask from './AddMytask';
import ListMytasks from './ListMytasks';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
const Mytasks =  () => {
    const auth =  useSelector(state=> state=> state.auth)
    const [mytask , setMytask]=   useState({
        name:"" ,
        isComplete:false 
    })

    if(!auth._id) return <Navigate to = "/signin"/>
    return (
        <>
        <AddMytask mytask = {mytask} setMytask={setMytask}/>
        <ListMytasks  setMytask={setMytask}/>
        </>
    );
}


export default Mytasks ; 