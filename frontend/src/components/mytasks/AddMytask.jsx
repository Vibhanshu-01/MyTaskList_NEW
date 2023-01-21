import React  from 'react' ;
import { useDispatch } from 'react-redux';

import { TextField , Button } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
import { addMytask , updateMytask } from '../../store/actions/mytaskAction';
const AddMytask =  ({mytask , setMytask}) => {
    
    const dispatch = useDispatch()

  
    const handleSubmit= e => {
        e.preventDefault()

        if(mytask._id){
            const id = mytask._id
            const updatedMytask = {
               name : mytask.name,
               isComplete: mytask.isComplete,
               date : mytask.date,
               author: mytask.author ,
               uid : mytask.uid,
            }
            dispatch(updateMytask(updatedMytask, id))
        }else{
            const newMytask = {
                ...mytask,
                date : new Date(),
            }
            dispatch(addMytask(newMytask))
        }
        
        setMytask({
            name:"",
            isComplete:false
        })
    }
    return (
        <>
        <form autoComplete='off' onSubmit={handleSubmit}>
        <TextField
        id="enter-mytask"
        variant = "outlined"
        label="enterMyTask"
        autoFocus
        fullWidth
        value = {mytask.name}
        onChange = {(e) => setMytask({...mytask , name :e.target.value})}
        />
        
        <Button color="primary" variant = "contained" type="submit">
        add
        </Button>
        </form>
        </>
    );
}


export default AddMytask ; 