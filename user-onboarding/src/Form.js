import React from 'react';

function Form(props) {
    return (
        <div>
            <h2>Please fill out form</h2>
            <form>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value=""
                        onChange=""
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value=""
                        onChange=""
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value=""
                        onChange=""
                    />
                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="terms"
                        onChange=""
                        checked=""
                    />
                </label>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;