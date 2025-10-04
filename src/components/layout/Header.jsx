import { NavLink } from "react-router-dom";

export const Header = () => {
    const getNavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "green" : "black",
        };
    };
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get Mukti Membership, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <a href="#">SIGN UP</a>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index">
                            <p>MuktiFlix</p>
                        </NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"
                            }>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" 
                                style={getNavLinkStyle}
                                    >
                                    about
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "black",
                                    };
                                }}
                                >
                                    movies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact">
                                    contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};