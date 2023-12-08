import React from "react";
import users from "./Books.js"
import User from "./Book.jsx"
import "./ListCSS.css"


function List(props){
    
    const user = users.map((user) => {
        return(
            <User key={user.id} user = {user} />  
        )})

    return(
        <div className="UsersList">
            <div className="row">
                {user}
            </div>
        </div>
    );
}

export default List;