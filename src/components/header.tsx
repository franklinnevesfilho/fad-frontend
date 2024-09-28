import '../styles/header.css';
import User from "../models/User";

function Header() {
    const currentUser: User | undefined = {
        name: "John Doe",
        age: 25,
        bio: "I am a software engineer",
        countryOfOrigin: "United States",
    }; // User type now properly imported

    const UserProfile = (prop: {user: User | undefined}) => {
        const user = prop?.user;

        if (!user) {
            return <div className="user-profile">
                <div className="user-name">Guest</div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
                <div className="sign-up-btn">
                    <button>Sign Up</button>
                </div>
            </div>;
        }

        return (
            <div className="user-profile">
                <div className="profile-pic">
                    <div className="user-image"></div>
                    <div className="user-name">{user.name}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="header">
            <div className="title">FAD</div>
            <div className="end">
                <UserProfile user={currentUser}/>
            </div>
        </div>
    );
}

export default Header;
