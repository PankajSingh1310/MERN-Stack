import { useState } from "react";

export const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        contact: ""
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
            const response = await fetch("http://localhost:3000/api/user/register", {
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
                <div className="register-image">
                    <img src="" alt="registration image" />
                </div>

                <div className="register-form">
                    <div className="heading">
                        <h1>Register User</h1>
                    </div>
                    
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Enter Your Name"
                                id="name"
                                required
                                value={user.name}
                                onChange={handleInput}
                            />
                        </div>

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

                        <div>
                            <label htmlFor="name">Contact</label>
                            <input 
                                type="number" 
                                name="contact"
                                placeholder="Enter Your Contact"
                                id="contact"
                                required
                                value={user.contact}
                                onChange={handleInput}
                            />
                        </div>

                        <button type="submit">Regsiter</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
