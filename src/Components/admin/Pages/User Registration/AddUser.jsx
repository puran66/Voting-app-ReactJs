import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_USER_PROGRESS } from '../../../Redux/Admin/action/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const Profile = useRef()
  const Password = useRef()
  const CardNumber = useRef()
  const Name = useRef()
  const Sex = useRef()
  const DOB = useRef()
  const Address = useRef()
  const Phone = useRef()
  const Email = useRef()

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleCancel = () => {
    navigate("/Home")
  }

  const handleUserAdd =()=>{
    const userData = {
      "Profile":Profile.current.value,
      "Password":Password.current.value,
      "CardNumber":CardNumber.current.value,
      "Name":Name.current.value,
      "Sex":Sex.current.value,
      "DOB":DOB.current.value,
      "Address":Address.current.value,
      "Phone":Phone.current.value,
      "Email":Email.current.value
    }

    if(Name.current.value && Password.current.value){
      dispatch({type : ADD_USER_PROGRESS , payload : userData})
    }
    else{
      toast.warn("Please fill all fields !")
    }
  }

  return (
    <>
      <div className="login-field flex flex-col justify-center items-center py-8 bg-[#1e293b] text-white">
        <div className="input-field border-2 border-color: rgb(29 78 216); w-[40%] h-auto rounded-md sm:m-[0] p-8 ">
          <div className="flex justify-between">
            <h3 className="font-bold text-[26px] mb-[35px]">Add New User</h3>
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: "24px", cursor: "pointer" }} onClick={handleCancel} />
          </div>
          <h5 className="font-bold text-[18px] mb-[10px] border-b-2" >Indian Resident Elector</h5>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Profile Picture Link</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Profile} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Name</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Name} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Sex</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Sex} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter DOB</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={DOB} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Address</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Address} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Phone</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Phone} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Email</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Email} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Card Number</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={CardNumber} />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Strong Password</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Password} />
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[30%]" onClick={handleUserAdd}>Add User</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUser