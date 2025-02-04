import CreatePassword from "./pages/Auth/CreatePassword/CreatePassword";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import HostOrRent from "./pages/Auth/HostOrRent/HostOrRent";
import Login from "./pages/Auth/Login/Login";
import PasswordSuccess from "./pages/Auth/PasswordSuccess/PasswordSuccess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import Signup from "./pages/Auth/Signup/Signup";
import Verify from "./pages/Auth/Verify/Verify";
import Home from "./pages/Home/Home";
import ListingDetail from "./pages/ListingDetail/ListingDetail";
import Search from "./pages/Search/Search";
import SearchResult from "./pages/SearchResult/SearchResult";

function App() {

  return (
    <>
     {/* <Home/> */}
     {/* <Login/> */}
     <Signup/>
     {/* <Verify/> */}
     {/* <CreatePassword/> */}
     {/* <HostOrRent/> */}
     <ForgotPassword/>
     {/* <ResetPassword/> */}
     {/* <PasswordSuccess/> */}

     {/* <Search/> */}
     {/* <SearchResult/> */}
     {/* <ListingDetail/> */}
    </>
  );
}

export default App;
