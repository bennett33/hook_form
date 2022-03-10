import React, { useState } from 'react';

const UserForm = (props) => {

    //initialize input variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    };


    return (
        <>
            <h3>Form</h3>
            <form onSubmit={createUser}>
                <div>
                    <div>
                        <label>First Name
                            <input type="text" className="form-control" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>Last Name
                            <input type="text" className="form-control" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>Email
                            <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>Password
                            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>Confirm Password
                            <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Create User"/>
            </form>


            {/* the text input in form will appear here */}
            <div>
                <h3>Your Form Data</h3>

                <div>
                    <p>First Name:</p>
                    <p>{firstName}</p>
                </div>

                <div>
                    <p>Last Name:</p>
                    <p>{lastName}</p>
                </div>

                <div>
                    <p>Email:</p>
                    <p>{email}</p>
                </div>

                <div>
                    <p>Password:</p>
                    <p>{password}</p>
                </div>

                <div>
                    <p>Confirm Password:</p>
                    <p>{confirmPassword}</p>
                </div>

            </div>
        </>
    )
};
export default UserForm;