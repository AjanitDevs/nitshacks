
import React from "react";
import './user.css';
function user(){
    return  <div className="dropdown">
    <button onClick={handleOpen}>Dropdown</button>
    {open ? (
      <ul className="menu">
        <li className="menu-item">
          <button>Menu 1</button>
        </li>
        <li className="menu-item">
          <button>Menu 2</button>
        </li>
      </ul>
    ) : null}
    {open ? <div>Is Open</div> : <div>Is Closed</div>}
  </div>
}