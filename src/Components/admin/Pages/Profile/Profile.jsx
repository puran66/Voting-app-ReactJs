import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { UPDATE_USER_PROGRESS } from '../../../Redux/Admin/action/action';

const Profile = () => {
  const [adminInfo, setInfo] = useState({})
  const [showView, setShow] = useState("none")
  const [hideMain, setHide] = useState("block")

  const dispatch = useDispatch();

  useEffect(() => {
    const getAdminData = JSON.parse(localStorage.getItem("admin-log"))

    console.log(getAdminData.data.data);

    setInfo(getAdminData.data.data)
  }, [])

  const handleUpdate = () => {
    setShow("block");
    setHide("none");
  }

  const handleChange = (e) => {
    setInfo({ ...adminInfo, [e.target.name]: e.target.value })
    console.log(adminInfo);
  }

  const handleClose = () => {
    setShow("none");
    setHide("block");
  }

  const finalUpdate = () => {
    dispatch({ type: UPDATE_USER_PROGRESS, payload: adminInfo })

    const loading = toast.loading("Updating Details...")

    setTimeout(() => {
      toast.dismiss(loading);
      setShow("none");
      setHide("block");
      toast.success("Updated Details Successfully!")
    },5000)
  }

  return (
    <>
      <div className="profile bg-[#1e293b] w-full h-[100vh]" style={{ display: hideMain }}>
        <div className="header flex justify-between font-bold p-5" style={{ color: "white" }} >
          <Link to="/Home">
            <FontAwesomeIcon icon={faArrowLeft} className="text-[22px]" />
          </Link>
          <Link to="/Help">
            <h1>Help <FontAwesomeIcon icon={faCircleInfo} /></h1>
          </Link>
        </div>
        <div className="profile-info text-white flex flex-col items-center">
          <div className="profile-img sm:w-[60%] w-[75%] h-[10%] flex justify-start my-5">
            <img src={adminInfo.Profile} alt="profile-img" className="w-[20%] rounded-full" />
          </div>
          <div className="info grid grid-cols-2 sm:w-[60%] w-[75%] gap-4 text-start text-[12px] sm:text-[14px] md:text-[16px]">
            <div className="name font-extralight">
              Full Name
              <div className="font-bold">{adminInfo.Name}</div>
            </div>
            <div className="email  font-extralight">
              Email
              <div className="font-bold">{adminInfo.Email}</div>
            </div>
            <div className="dob  font-extralight">
              Date Of Birth
              <div className="font-bold">{adminInfo.DOB}</div>
            </div>
            <div className="phone  font-extralight">
              Phone Number
              <div className="font-bold">{adminInfo.Phone}</div>
            </div>
            <div className="address  font-extralight">
              Address
              <div className="font-bold">{adminInfo.Address}</div>
            </div>
            <div className="role  font-extralight">
              Role
              <div className="font-bold">{adminInfo.Role}</div>
            </div>
            <div className="cardNumber  font-extralight">
              Card Number
              <div className="font-bold">{adminInfo.CardNumber}</div>
            </div>
          </div>
          <div className="flex justify-start sm:w-[60%] w-[75%] ">
            <button className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 sm:py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:w-[30%] w-[50%] " onClick={handleUpdate}>Edit profile</button>
          </div>
        </div>
      </div>

      {/* update field  */}

      {
        adminInfo && (
          <div style={{ display: showView }}>
            <div className="login-field w-full h-[100vh] flex flex-col justify-center items-center">
              <div className="input-field border-2 border-color: rgb(29 78 216);  p-5  sm:w-[50%] w-[80%] sm:p-5 my-16 sm:text-[16px] text-[12px] rounded-md sm:m-[0] ">
                <div className="flex justify-between border-b-2">
                  <h5 className="font-bold text-[18px] mb-[10px]" >Update Profile Details</h5>
                  <FontAwesomeIcon icon={faXmark} style={{ fontSize: "24px", cursor: "pointer" }} onClick={handleClose} />
                </div>
                <div className="image flex justify-center">
                  <img src={adminInfo.Profile} alt="profile-img" className=" rounded-full my-2 w-[80px]" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Profile Image Link</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.Profile} onChange={(e) => handleChange(e)} name="Profile" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Name</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.Name} onChange={(e) => handleChange(e)} name="Name" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Card Number</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.CardNumber} onChange={(e) => handleChange(e)} name="CardNumber" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">DOB</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.DOB} onChange={(e) => handleChange(e)} name="DOB" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Phone</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.Phone} onChange={(e) => handleChange(e)} name="Phone" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Email</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.Email} onChange={(e) => handleChange(e)} name="Email" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Address</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={adminInfo.Address} onChange={(e) => handleChange(e)} name="Address" />
                </div>
                <div className="flex justify-center mt-3">
                  <button className="text-white sm:text-[16px] text-[10px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg sm:px-5 sm:py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[30%] sm:w-[40%]" onClick={() => finalUpdate()}>Update</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Profile