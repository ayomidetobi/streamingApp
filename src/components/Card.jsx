import React from "react"

function Card(props) {
    const welcome=()=>{
        alert("Welcome Folake!");
    }
  return (
      <div>
          <div className="container px-4 text-center">
              <div className="row gx-5">
                  <div className="col">
                      <div className="p-3 bg-warning">
                        <h1>Name of Student: {props.name}</h1>
                        <h2>Location: {props.location}</h2>
                        <h3>Email: {props.email}</h3>
                        <button className="btn btn-danger" onClick={welcome}>Click Me</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Card;
