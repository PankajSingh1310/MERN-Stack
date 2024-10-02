import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {

    const navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

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

            if(response.ok === true){
              const res_data = await response.json();
              console.log(res_data);
              storeTokenInLocalStorage(res_data.token);

              setUser({ name: "", email: "", password: "", contact: "" });
              navigate("/");
            }

            else{
              const res_data = await response.json();
              console.log(res_data);
            }
            
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
          <section>
            <main>
              <div className="section-registration">
                <div className="container grid grid-two-cols">
                  <div className="registration-image">
                    <img
                      src="/images/register.png"
                      alt="a girl is trying to do registration"
                      width="500"
                      height="500"
                    />
                  </div>
    
                  {/* let tackle registration form  */}
                  <div className="registration-form">
                    <h1 className="main-heading mb-3">registration form</h1>
                    <br />
    
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name">name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          id="name"
                          required
                          autoComplete="off"
                          value={user.name}
                          onChange={handleInput}
                        />
                      </div>
    
                      <div>
                        <label htmlFor="email">email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="enter your email"
                          id="email"
                          required
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone">phone</label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="phone"
                          id="phone"
                          required
                          autoComplete="off"
                          value={user.phone}
                          onChange={handleInput}
                        />
                      </div>
    
                      <div>
                        <label htmlFor="password">password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          id="password"
                          required
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInput}
                        />
                      </div>
    
                      <br />
                      <button type="submit" className="btn btn-submit">
                        Register Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </>
      );
    };
    