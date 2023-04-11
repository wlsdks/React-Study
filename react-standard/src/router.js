import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/components/NotFoundPage";

import Calculator from "@/components/Calculator";
import Counter from "@/components/Counter";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/calculator",
                element: <Calculator />,
            },
            {
                path: "/live-clock",
                element: <LiveClock />,
            },
            {
                path: "/counter",
                element: <Counter />,
            },
            {
                path: "/to-do-list",
                element: <TodoList />,
            },
        ],
    },
]);

export default router;
