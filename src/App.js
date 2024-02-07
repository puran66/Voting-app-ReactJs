import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/admin/Pages/Login Page/Login';
import Home from './Components/admin/Pages/Home/Home';
import AddUser from './Components/admin/Pages/User Registration/AddUser';
import Users from './Components/admin/Pages/Users/Users';
import Votes from './Components/admin/Pages/Votes/Votes';
import Profile from './Components/admin/Pages/Profile/Profile';
import Main from './Components/admin/Pages/Main Page/Main';
import { ToastContainer } from 'react-toastify';
import Protected from './Components/admin/Pages/Protected/Protected';
import Elections from './Components/admin/Pages/Elections/Elections';
import AddElection from './Components/admin/Pages/Add Election/AddElection';
import AddParty from './Components/admin/Pages/AddParty/AddParty';
import Parties from './Components/admin/Pages/Parties/Parties';
import AddPartyList from './Components/admin/Pages/Add PartyList/AddPartyList';
import PartyList from './Components/admin/Pages/PartyList/PartyList';
import UserLogin from './Components/user/Pages/Login/UserLogin';
import Vote from './Components/user/Pages/Home/Vote/Vote';
import UserProfile from './Components/user/Pages/Profile/UserProfile';
import Help from './Components/user/Pages/Help/Help';

function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Home" element={<Protected page={Home} />} />
        <Route path="/AddUser" element={<Protected page={AddUser} />} />
        <Route path="/UserLogin" element={<UserLogin/>} />
        <Route path="/Vote" element={<Vote/>} />
        <Route path="/Help" element={<Help/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/Users" element={<Protected page={Users} />} />
        <Route path="/Votes" element={<Protected page={Votes} />} />
        <Route path="/Elections" element={<Protected page={Elections} />} />
        <Route path="/AddElection" element={<Protected page={AddElection} />} />
        <Route path="/AddParty" element={<Protected page={AddParty} />} />
        <Route path="/Parties" element={<Protected page={Parties} />} />
        <Route path="/AddElection" element={<Protected page={AddElection} />} />
        <Route path="/AddPartyList" element={<Protected page={AddPartyList} />} />
        <Route path="/PartyList" element={<Protected page={PartyList} />} />
        <Route path="/Profile" element={<Protected page={Profile} />} />
        <Route path="/Help" element={<Help/>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}


export default App;
