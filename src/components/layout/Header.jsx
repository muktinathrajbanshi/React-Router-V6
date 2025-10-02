export const Header = () => {
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get Mukti Membership, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <a href="#">SIGN IN</a>
                            <a href="#">SIGN UP</a>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <a href="index">
                            <p>MuktiFlix</p>
                        </a>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/about">
                                    about
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/movie">
                                    movies
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};