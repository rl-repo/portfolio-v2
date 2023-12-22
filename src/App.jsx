import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import WebDevPage from "./pages/WebDevPage.jsx";
import SQLPage from "./pages/SQLPage.jsx";
import ResumePage from "./pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "web-development", element: <WebDevPage /> },
      { path: "sql", element: <SQLPage /> },
      { path: "resume", element: <ResumePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
