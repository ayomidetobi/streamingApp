import React from "react"
import Header from "./Header";
import Footer from "./Footer";

function Auth(props) {
    const isHeadOn = props.isOn
  return (
    <div>
        { isHeadOn ? <Header/>: <Footer />}
    </div>
  )
};

export default Auth;
