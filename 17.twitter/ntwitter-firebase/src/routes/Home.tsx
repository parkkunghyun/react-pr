import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    await auth.signOut();
    console.log("Log out!!");
    navigate("/login");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={logOut}>logOut</button>
    </>
  );
};

export default Home;
