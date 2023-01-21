import React ,{useEffect} from 'react' ;
import { useDispatch , useSelector} from 'react-redux';
import Mytask from './Mytask';
import { Typography } from '@mui/material';
import { getMytasks } from '../../store/actions/mytaskAction';
// import auth from '../../../../backend/middleware/auth';
import { Navigate } from 'react-router';
const ListMytasks =  ({setMytask}) => {
  const auth = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const mytasks  = useSelector((state) => state.mytasks)
  

  useEffect(()=> {
    dispatch(getMytasks())
  }, [dispatch])


  if(!auth._id) return <Navigate to="/signin"/>
    return (
        <>
        <div>
        <Typography variant = "h5">
          {mytasks.length>0? "mytasks": "You are Absolutely Free!;"}
        </Typography>
        {mytasks && mytasks.map((mytask)=>{
          return  (
            <Mytask
            mytask = {mytask}
            key= {mytask._id}
            setMytask= {setMytask}
            mytasks = {mytasks}
            />
          )
        })}
        </div>
        </>
    );
}


export default ListMytasks ; 