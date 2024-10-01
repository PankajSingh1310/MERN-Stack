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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }

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
