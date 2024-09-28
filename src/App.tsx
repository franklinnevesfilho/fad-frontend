import {Header} from "./components/header.tsx";
import {HomeScreen} from "./screens/HomeScreen.tsx";
import {Footer} from "./components/footer.tsx";
import {SignInScreen} from "./screens/SignInScreen.tsx";
import {RegistrationScreen} from "./screens/RegistrationScreen.tsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {SplitScreen} from "./screens/SplitScreen.tsx";

interface Screen {
    name: string;
    component: never;
}

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeScreen/>
        },
        {
            path: "/sign-in",
            element: <SignInScreen/>
        },
        {
            path: "/register",
            element: <RegistrationScreen/>
        },
        {
            path: "/connections",
            element: <SplitScreen/>
        }
    ])

    const hideLinks = () => {
    //     if on sign in screen or register return true
        if (window.location.href.includes("sign-in") || window.location.href.includes("register")) {
            return true
        }
        return false
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header hideLinks={hideLinks()}/>
            <main className="flex-grow">
                <RouterProvider router={router}/>
            </main>
            <Footer/>
        </div>

    );
}

export default App;
