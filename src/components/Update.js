import React from "react";
import "./Update.css"



const Update = () => {
    const handleClick =(i) => {
        
    }

  return (
    <div style={{ marginTop: "2%" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Floor
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>Ground Floor</li>
                  <li>1st Floor</li>
                  <li>2nd Floor</li>
                  <li>3rd Floor</li>
                  <li>4th Floor</li>
                  <li>5th Floor</li>
                  <li>6th Floor</li>
                  <li>7th Floor</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-dark">
        <div className="container text-center">
          <div className="row">
            {Array.from(Array(12), (e, i) => {
              return (
                <div
                  onClick={handleClick(i)}
                  className="col-lg-2 col-md-3 col-12 text-light"
                  key={i + 1}
                >
                  <h1 className="roomClass"
                    style={{
                      borderRadius: "5px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "white",
                      height:"100px",
                      alignItems:"center",
                      justifyContent:"center",
                      display:"flex"
                    }}
                  >
                    R{i + 1}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
