import { createBrowserRouter } from "react-router-dom";
import Routes from "./utils/routes";
import PageModal from "./pages/page_modal/page_modal";
import Home from "./pages/home/home";
import ProtectedRoute from "./general_components/protected_routes/protected_routes";

const routhPaths = Routes.ROUTES;

const routes = createBrowserRouter([
    {
        path: routhPaths.root,
        element: <Home />,
    },
    {
        path: routhPaths.modal,
        element: (
            <ProtectedRoute>
                <PageModal />
            </ProtectedRoute>
        ),
    },
]);

export default routes;
