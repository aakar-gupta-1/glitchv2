import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import map1 from "../image/map1.PNG";
import Axios from "axios";

function Home() {
  let phone = React.createRef();

  const submit_phone = () => {
    if (phone.current.value) console.log(phone.current.value);

    const accountSid = "ACb6785cec928511ebc7ea2d77c6c2b9ff";
    const authToken = "49d500de40ee0aea80801e7e70575670";
    const client = require("twilio")(accountSid, authToken);
    client.messages
      .create({ from: "+15595173054", body: "body", to: "+918630034140" })
      .then((message) => console.log(message.sid));
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-bold heading animate__animated animate__bounce">
              Want us to wake you up before your destination?
            </h1>
            <p>We'll give you a call on</p>
            <form>
              <input
                type="tel"
                placeholder="+91 | 0 0 0 0 0 0 0 0 0 0"
                ref={phone}
              />
              <br />
              <br />
              <button onClick={submit_phone} type="button">
                Send OTP
              </button>
            </form>
          </div>
          <div className="col-lg-7">
            <img
              className="imgabout animate__animated animate__fadeIn animate__delay-1s image"
              src={map1}
              alt="some aesthetic shit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
