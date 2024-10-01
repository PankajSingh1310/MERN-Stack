import { useState } from "react";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [key] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="container">
            <div className="main">
                <div className="login-image">
                    <img src="" alt="Login image" />
                </div>

                <div className="login-form">
                    <div className="heading">
                        <h1>Login User</h1>
                    </div>
                    
                    <form className="form" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Enter Your Email"
                                id="email"
                                required
                                value={user.eamil}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="name">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Enter Your Password"
                                id="password"
                                required
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>

                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
