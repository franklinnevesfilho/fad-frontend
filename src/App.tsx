import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header'; // Your Header component
import { HomeScreen } from './screens/HomeScreen'; // Home component
import { SignInScreen } from './screens/SignInScreen'; // SignIn component
import { RegistrationScreen } from './screens/RegistrationScreen';
import { Footer } from "./components/footer"; // Footer component

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> {/* Use flex and min-h-screen */}
                <Header />
                <main className="flex-grow"> {/* This takes the remaining space */}
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/signin" element={<SignInScreen />} />
                        <Route path="/register" element={<RegistrationScreen />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
