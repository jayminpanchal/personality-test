import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/start";
import ExamPage from "./pages/exam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/exam",
    element: <ExamPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
