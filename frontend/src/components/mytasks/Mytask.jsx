import React from 'react' ;
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { Typography , Button , ButtonGroup } from '@mui/material';
import { checkMytask , deleteMytask} from '../../store/actions/mytaskAction';
const Mytask =  ({mytask , setMytask}) => {
  const dispatch = useDispatch()
  const handleUpdateClick = ()=> {
    setMytask(mytask)

    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"

    })
  }

  const handleCheck = (id) => {
     dispatch(checkMytask(id))
  }
  const handleDelete = (id) => {
    dispatch(deleteMytask(id))
 }
    return (
        <>
        <div>
        <div>
        <Typography variant = "subtitle1">
         {mytask.name}
        </Typography>
        <Typography variant = "body2">
         author: vibhanshu
        </Typography>
        <Typography variant = "body2">
          Added: { moment(mytask.date).fromNow()}
        </Typography>
        </div>
        <div>
        <ButtonGroup  size="small" aria-label = "outlined">
        <Button onClick = {()=> handleCheck(mytask._id)} >
        {mytask.isComplete ? <h6>completed</h6>  : <h6>NotCompleted</h6> }
          </Button>
        <Button onClick = {()=> handleUpdateClick()}>
        Edit
        </Button>
        <Button onClick= {()=> handleDelete(mytask._id)}>
         delete
        </Button>
        </ButtonGroup>
        </div>
        </div> 
        </>
    );
}


export default Mytask ; 