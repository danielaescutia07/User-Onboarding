import React from 'react';
import './Form.css';
function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div className="userDiv">
            <h2>Add User</h2>
            <div style={{color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <form className="userInput" onSubmit={onSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={onChange}
                        checked={values.terms}
                    />
                </label>
                <button id="submitBtn" disabled={disabled}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;