import React from "react";

function Users(props) {
    const { details } = props;

    return (
        <div>
            <h3>Hello I am the Users Component!</h3>
            <h4>Name: {details.name}</h4>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default Users;