import React from "react";

function Users(props) {
    const { details } = props;

    return (
        <div>
            <h2>Welcome!</h2>
            <h4>Name: {details.name}</h4>
            <h4>Email: {details.email}</h4>
        </div>
    )
}

export default Users;