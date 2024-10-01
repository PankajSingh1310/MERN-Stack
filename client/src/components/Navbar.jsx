import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <header>
            <div className="left">
                <h3>My App Logo</h3>
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}