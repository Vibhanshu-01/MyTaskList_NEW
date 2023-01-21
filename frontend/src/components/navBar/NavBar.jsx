import React from 'react' ;
import {AppBar , Typography , Toolbar, Button} from "@mui/material"
import {Link , useNavigate} from "react-router-dom"
import { useDispatch , useSelector } from 'react-redux';

import {signOut} from "../../store/actions/authAction"




const NavBar =  () => {

    const state = useSelector(state => state)
    const auth = useSelector(state => state.auth)
    console.log(state)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut())
        navigate('/signin');
    }
    return (
        <>
        <AppBar position = "static" color ="secondary" >
        <Toolbar>
        <Typography variant="h4" >
        <Link to="/">
        MyTaskList
        </Link>
        </Typography>
        {auth._id? (
            <><Typography  variant="subtitle2" >
            logged as {auth.name}
            </Typography>
            <Button  onClick={()=> handleSignOut()}>
            SignOut
            </Button></>
        
        ):(
            <>   <Button>
            <Link to='/signin'>
            SignIn
            </Link>
            </Button>
            <Button>
            <Link to='/signup'>
            SignUp
            </Link>
            </Button>
            </>
         
        )}
        
        </Toolbar>
        </AppBar>
        </>
    );
}


export default NavBar; 