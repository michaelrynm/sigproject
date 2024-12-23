import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landingPage.jsx";
import OsmPage from "../pages/osmPage.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/osm",
      element: <OsmPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
