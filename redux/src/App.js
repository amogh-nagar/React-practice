import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile"
import {useSelector, useDispatch} from "react-redux";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log("App: ", isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
