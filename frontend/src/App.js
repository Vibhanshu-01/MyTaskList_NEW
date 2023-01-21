import React ,{useEffect} from 'react' ; 
import {useDispatch} from "react-redux"
import {BrowserRouter , Route, Routes} from "react-router-dom"
import { Container } from '@mui/system';

import Mytasks from './components/mytasks/Mytasks'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar' ;
import { loadUser } from './store/actions/authAction';

import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  }, [dispatch])
  return (
    <>
    <BrowserRouter>
    
    <Container maxWidth = "md">
    <NavBar/>
    <Routes>
    <Route path='/signin' element = {<SignIn/>}/>
    <Route path='/signup' element = {<SignUp/>}/>
    <Route path='/' exact element={<Mytasks/>}/>
    </Routes>
    </Container>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
