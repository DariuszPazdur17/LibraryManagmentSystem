import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/home";
import Signup from "./components/signup/signup";
import Login from "./components/Login/login";
import Advancedsearch from "./components/search/advancedsearch";
import Adminlogin from "./components/Login/admin";
import Footer from "./components/Footer/footer";
import Adminhome from "./components/Admin/Home";
import Userhome from "./components/user/Home";
import Addbook from "./components/Admin/book/add_book";
import { Deletebook } from "./components/Admin/book/delete_book";
import { Deleteuser } from "./components/Admin/book/delete_user";
import { Favourites } from "./components/user/favourites";
import { Yourbooks } from "./components/user/yourbooks";
import { Viewrequests } from "./components/Admin/viewrequests";
import { Searchhistory } from "./components/user/search_history";
import Requestbook from "./components/user/requestbook";
import { Viewacceptedrequests } from "./components/Admin/book/viewacceptedrequest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/advancedsearch" element={<Advancedsearch />} />
        <Route exact path="/adminlogin" element={<Adminlogin />} />
        <Route exact path="/adminpage" element={<Adminhome />} />
        <Route exact path="/userpage" element={<Userhome />} />
        <Route exact path="/addbook" element={<Addbook />} />
        <Route exact path="/deletebook" element={<Deletebook />} />
        <Route exact path="/deleteuser" element={<Deleteuser />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/yourbooks" element={<Yourbooks />} />
        <Route exact path="/viewrequests" element={<Viewrequests />} />
        <Route exact path="/searchhistory" element={<Searchhistory />} />
        <Route exact path="/requestbook" element={<Requestbook />} />
        <Route exact path="/viewbooks" element={<Viewacceptedrequests />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
