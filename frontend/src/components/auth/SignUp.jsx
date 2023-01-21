import React , {useState} from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Typography , TextField , Button } from '@mui/material';
import { signUp } from '../../store/actions/authAction';
const SignUp =  () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [user, setUser] = useState({
        name : "",
        email : "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUp(user))
        setUser({
        name : "",
        email : "",
        password: "",
        })
        
    }
    if(auth._id)   return <Navigate to = "/" />
    return (
        <>
        <form
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}>
        <Typography variant ="h5"> signUp</Typography>
        <TextField
        id = "enter-name"
        label = "enterName"
        variant='outlined'
        fullWidth
        value = {user.name}
        onChange = {(e) => setUser({...user, name: e.target.value})}
        />
        <TextField
        id = "enter-email"
        label = "enterEmail"
        variant='outlined'
        fullWidth
        value = {user.email}
        onChange = {(e) => setUser({...user, email: e.target.value})}
        />
        <TextField
        id = "enter-password"
        type= "password"
        label = "enterPassword"
        variant='outlined'
        fullWidth
        value = {user.password}
        onChange = {(e) => setUser({...user, password: e.target.value})}
        />
        <Button
        variant="outlined"
        color ="primary"
        type = "submit">
        SignUp
        </Button>
        </form>
        </>
    );
}


export default SignUp ; 