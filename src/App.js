import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import { AuthContext,FirebaseContext } from './store/Context';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/postContext';

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)

    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/view' element={<View />}/>
          

        </Routes>
          
        
        
      </Router>
      </Post>
      
    </div>
  );
}

export default App;
