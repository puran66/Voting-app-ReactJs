import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faCircleInfo, faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ navData }) => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState("hidden w-full md:block md:w-auto")
  const [showDropMenu, setDropMenu] = useState("hidden bg-white w-[150px] h-auto p-3 text-center rounded mt-[10px] absolute duration-500")
  const [hideMenuBar, setHide] = useState("block md:hidden")

  const handleLogout = () => {
    const logout = toast.loading("Logging out...");
    setTimeout(() => {
      toast.dismiss(logout);
      localStorage.removeItem("admin-log");

      navigate("/");

      toast.success("Logout Sucessfully")
    }, 3000)
  }

  const handleOpen = () => {
    setOpen("block w-full text-center")
    setHide("hidden")
  }

  const handleCancel = () => {
    setOpen("hidden w-full md:block md:w-auto")
    setHide("block md:hidden")
  }

  const handleMenu = () => {
    setDropMenu("hidden bg-white w-[150px] h-auto p-3 text-center rounded mt-[10px] absolute duration-500")
  }

  const handleHideMenu = () => {
    setDropMenu("dropdownMenu bg-white w-[150px] h-auto p-3 text-center rounded mt-[10px] absolute duration-500")
  }

  return (
    <>
      <nav className="bg-[#1e293b] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-white">
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/voting-1609907-1363752.png?f=webp&w=256" className="h-8 text-white" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Vote</span>
          </a>
          <div className={isOpen} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#1e293b] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              {
                navData ?
                  <>
                    <Link to="/Home">
                      <li style={{ position: "relative" }}>
                        <a href="#" className="block py-2 px-3 text-gray duration-200 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: "25px", position: "absolute", top: "0px", right: "5px" }} onClick={handleCancel} className="block md:hidden" />
                      </li>
                    </Link>
                    <Link to="/AddUser">
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add User</a>
                      </li>
                    </Link>
                    <Link to="/Users">
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</a>
                      </li>
                    </Link>
                    <li style={{ position: "relative" }}>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onMouseEnter={handleHideMenu} onClick={handleMenu}>Election</a>
                      <div className={showDropMenu} onMouseLeave={handleMenu}>
                        <FontAwesomeIcon icon={faCaretDown} rotation={180} style={{ color: "#ffffff", position: "absolute", fontSize: "30px", top: "-15px", left: "1px" }} />
                        <ul>
                          <Link to="/AddParty">
                            <li className="mt-2 hover:text-blue-500 border-b-2">Add Party</li>
                          </Link>
                          <Link to="/Parties">
                            <li className="mt-2 hover:text-blue-500 border-b-2">View Parties</li>
                          </Link>
                          <Link to="/AddElection">
                            <li className="mt-2 hover:text-blue-500 border-b-2">Add Election</li>
                          </Link>
                          <Link to="/Elections">
                            <li className="mt-2 hover:text-blue-500 border-b-2">View Elections</li>
                          </Link>
                          <Link to="/PartyList">
                            <li className="mt-2 hover:text-blue-500 border-b-2">View PartyList</li>
                          </Link>
                          <Link to="/AddPartyList">
                            <li className="mt-2 hover:text-blue-500 border-b-2">Add PartyList</li>
                          </Link>
                          <Link to="/Votes">
                            <li className="mt-2 hover:text-blue-500 border-b-2">Votes</li>
                          </Link>
                        </ul>
                      </div>
                    </li>
                    <Link to="/Profile">
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                      </li>
                    </Link>
                    <li onClick={handleLogout}>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#1d5ac3" }} /></a>
                    </li>
                  </>
                  :
                  <Link to="/Help">
                    <li>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Help<FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", marginLeft: "5px" }} /></a>
                    </li>
                  </Link>
              }
            </ul>
          </div>
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: "25px" }} className={hideMenuBar} onClick={handleOpen} />
        </div>
      </nav>
    </>
  )
}

export default Navbar