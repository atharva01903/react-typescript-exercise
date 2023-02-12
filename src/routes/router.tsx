import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/second-page",
        element: <SecondPage/>
    }
])

export default router;