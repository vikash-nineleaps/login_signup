import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const navigate=useNavigate()
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signUp =(e)=> {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((useCredential)=>{
      navigate('/Succes');
    }).catch((error)=>{
      console.log(error)
    })
  }
 
return (
    <>
      <section class="h-100 gradient-form" style={{'background-color': '#ffffff'}}>
  
      <div class="container py-5 h-100">
                <form>
                  <p>Please signup to  create your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address"
                      value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                 />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" placeholder="Password" 
                    value={password}
                  onChange={(e)=> setPassword(e.target.value)}
 />
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"  type="button" onClick={signUp}>Sign Up</button>
                    
                  </div>

                  

                </form>

             </div>
</section>
    </>
)

}