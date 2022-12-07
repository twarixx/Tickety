import './App.css'
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {Layout} from "./components/Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Layout/>
            ),
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/register",
            element: <RegisterPage/>,
        }
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
