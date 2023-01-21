import React , {useState} from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import {signIn} from '../../store/actions/authAction';
import { Typography , TextField , Button } from '@mui/material';
const SignIn =  () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [creds , setCreds] = useState({
        email:"",
        password:""

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds));
        setCreds({
            email:"",
            password:""
        })
    }

    if(auth._id) return <Navigate to="/"/>
    return (
        <>
        <form
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}>
        <Typography variant ="h5"> SignIn</Typography>
        <TextField
        id = "enter-email"
        label = "enterEmail"
        variant='outlined'
        fullWidth
        value = {creds.email}
        onChange = {(e) => setCreds({...creds , email:e.target.value})}
        />
        <TextField
        id = "enter-password"
        type= "password"
        label = "enterPassword"
        variant='outlined'
        fullWidth
        value = {creds.password}
        onChange = {(e) => setCreds({...creds , password :e.target.value})}
        />
        <Button
        variant="outlined"
        color ="primary"
        type = "submit">
        SignIn
        </Button>
        </form>
        </>
    );
}


export default SignIn ; 