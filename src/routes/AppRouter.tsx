import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const HomeLayout = lazy(() => import("../Layouts/HomeLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const WorksPage = lazy(() => import("../pages/WorksPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            Component: HomeLayout,
            children: [
              { index: true, Component: HomePage },
              { path: "about", Component: AboutPage },
              { path: "works", Component: WorksPage },
              { path: "contact", Component: ContactPage },
            ],
          },
        ])}
      />
    </Suspense>
  );
}

export default AppRouter;
