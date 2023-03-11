import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Landingpage() {
  const [alreadyUser, setAlreadyUser] = useState(false);

  function handleClick() {
    setAlreadyUser(!alreadyUser);
    console.log(alreadyUser);
  }
  let button = "";
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://jep-asset.akamaized.net/jio/svg-og/jionews_logo.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            NEWSium
          </a>
        </div>
      </nav>
      <section
        class="h-100 gradient-form"
        style={{ backgroundColor: "#dc143c" }}
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div>
                      <div class="card-body p-md-5 mx-md-4">
                        <div class="text-center">
                          <img
                            src="https://jep-asset.akamaized.net/jio/svg-og/jionews_logo.png"
                            style={{ width: 185 }}
                            alt="logo"
                          />
                          <h4 class="mt-1 mb-5 pb-1">We Are The NEWSium</h4>
                        </div>
                        <form>
                          <div class="text-center pt-1 mb-5 pb-1">
                            <p>If you are</p>
                            <button
                              class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                              onClick={handleClick}
                            >
                              {alreadyUser ? "New User" : "Already a user"}
                            </button>
                            <div></div>
                            <p>Click here☝️</p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        {alreadyUser ? <Login /> : <Signup />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
