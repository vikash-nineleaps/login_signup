import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Error from "./Error";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const onClicking=(e)=> {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=> {
      navigate("/Homepage");
    }).catch((error)=>{
      navigate("/Error")
    })
    setloggedIn(true);
  }
  if (loggedIn) {
    console.log("welcome")
  } else {
    return (
      <>
        <section
          class="h-100 gradient-form"
          style={{ "background-color": "#ffffff" }}
        >
          <div class="container py-5 h-100">
            <form>
              <p>Please login to your account</p>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example11"
                  class="form-control"
                  placeholder="Phone number or email address"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example22"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}

                />
              </div>

              <div class="text-center pt-1 mb-5 pb-1">
                <button
                  class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                  type="button"
                  onClick={onClicking}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
