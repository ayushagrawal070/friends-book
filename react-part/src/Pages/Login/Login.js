import './Login.css'
import { CircularProgress } from "@material-ui/core";

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FriendsBook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on FriendsBook.
          </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox">
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                        //   ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                        //   ref={password}
                        />
                        <button className="loginButton" type="submit">Login
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a new Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login
