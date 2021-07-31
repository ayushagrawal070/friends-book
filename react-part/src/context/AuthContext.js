import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    // user: null,
    user: {
        _id
            :
            "60ffa42b068c651ae40abf9d",
        profilePicture
            :
            "person/2.jpeg",
        coverPicture
            :
            "",
        followers
            :
            [],
        following
            :
            [],
        isAdmin
            :
            false,
        username
            :
            "Ayush Agrawal",
        email
            :
            "ayush@gmail.com",
        password
            :
            "$2b$10$ZDA.Ks7sFMwLoVapDO4Wx.mh3zqSDjgpvfPEDCnVpM2b8Ml1jXOBe",
        city
            :
            "iglas",
        from
            :
            "uttar pradesh",
        relationship
            :
            1,
        desc
            :
            "live and let live"
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
}