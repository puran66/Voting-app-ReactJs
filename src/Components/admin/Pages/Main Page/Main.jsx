import React, { useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

const Main = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("admin-log")){
      navigate("/Home")
    }
  },[])
  return (
    <>
    <Navbar navData={false} />
      <div className="logo bg-[#1e293b] text-white w-full h-[60vh] sm:h-[100vh] lg:text-[32px] text-[24px] sm:text-[18px] md:text-[22px] font-bold text-center flex flex-col items-center justify-center">
        <center>
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/voting-1609907-1363752.png?f=webp&w=256" className="h-[100px] w-[100px] text-white" alt="Flowbite Logo" />
        </center>
        <h3>Voting App</h3>
        <p>Make Things Digital</p>
        <Link to="/Login">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Login</button>
        </Link>
      </div>
    </>
  )
}

export default Main