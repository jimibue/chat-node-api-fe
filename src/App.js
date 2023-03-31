import "./App.css";
import "./message.css";
import Root from "./routes/Root";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      { index: true, element: <Contact /> },
      {
       
        path: "contacts/:id",
        element: <Contact />,
      },
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
