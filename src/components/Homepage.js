import { useState, useEffect } from "react";
// get("https://zenquotes.io/api/quotes")
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  function onClicking() {
    navigate("/");
  }
  const getquoteData = async () => {
    try {
      const res = await fetch("https://zenquotes.io/api/quotes");
      const actualData = await res.json();
      setMyData(actualData);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(myData[0]);
  useEffect(() => {
    getquoteData();
  }, []);

  const quotes = myData.map((item) => (
    <p style={{ align: "center" }} key={item.q}>
      {item.q}
    </p>
  ));
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
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                            onClick={onClicking}
                          >
                            Log out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    class="col-lg-6"
                  >
                    <div class="card-body p-md-5 mx-md-4">
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p>{quotes[0]}</p>
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
