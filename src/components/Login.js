import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();

  function onClicking() {
    setloggedIn(true);
  }
  if (loggedIn) {
    navigate("/Homepage");
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
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example22"
                  class="form-control"
                  placeholder="Password"
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
