import './Register.css'

function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">FriendsBook</h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on FriendsBook.
            </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox">
                        <input
                            placeholder="Username"
                            required
                            className="registerInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            className="registerInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            className="registerInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Enter your Password again"
                            required
                            className="registerInput"
                            type="password"
                        />
                        <button className="registerButton" type="submit">
                            Sign Up
              </button>
                        <button className="registerRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register
