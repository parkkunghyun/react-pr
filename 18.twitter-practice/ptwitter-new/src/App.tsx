import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import { useEffect, useState } from "react";
import LoadingScreen from "./routes/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: boder-box;
  }
  body {
    background-color : black;
    color: whilte;
    
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await setTimeout(() => setIsLoading(false), 2000);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyled></GlobalStyled>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
