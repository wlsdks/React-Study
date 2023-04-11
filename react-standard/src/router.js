import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/components/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
    },
]);

export default router;
