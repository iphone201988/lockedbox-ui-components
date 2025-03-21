import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CreatePassword from "./pages/Auth/CreatePassword/CreatePassword";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import HostOrRent from "./pages/Auth/HostOrRent/HostOrRent";
import Login from "./pages/Auth/Login/Login";
import PasswordSuccess from "./pages/Auth/PasswordSuccess/PasswordSuccess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import Signup from "./pages/Auth/Signup/Signup";
import Verify from "./pages/Auth/Verify/Verify";
import BookingReview from "./pages/BookingReview/BookingReview";
import FAQ from "./pages/SupportPages/FAQ";
import Home from "./pages/Home/Home";
import HostDashboard from "./pages/HostDashboard/HostDashboard";
import ListingDetail from "./pages/ListingDetail/ListingDetail";
import BookingReceipt from "./pages/RenterDashboard/Pages/BookingReceipt/BookingReceipt";
import RenterDashboard from "./pages/RenterDashboard/RenterDashboard";
import Search from "./pages/Search/Search";
import SearchResult from "./pages/SearchResult/SearchResult";
import RenterBasics from "./pages/SupportPages/RenterBasics";
import ContactUs from "./pages/SupportPages/ContactUs";
import AdminLogin from "./pages/Auth/AdminLogin/AdminLogin";

function App() {

  return (
    <>
     {/* <Home/> */}
     {/* <Login/> */}
     <Signup/>
     {/* <Verify/> */}
     {/* <CreatePassword/> */}
     {/* <HostOrRent/> */}
     {/* <ForgotPassword/> */}
     {/* <ResetPassword/> */}
     {/* <PasswordSuccess/> */}

     {/* support pages */}
     {/* <FAQ/> */}
     {/* <RenterBasics/> */}
     {/* <ContactUs/> */}

     {/* <Search/> */}
     {/* <SearchResult/> */}
     {/* <ListingDetail/> */}
     {/* <BookingReview/> */}

     {/* <RenterDashboard/> */}
     {/* <BookingReceipt/> */}

     {/* <HostDashboard/> */}

     {/* <AdminDashboard/> */}
     <AdminLogin/>
    </>
  );
}

export default App;
