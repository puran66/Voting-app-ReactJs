import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_PARTYLIST_PROGRESS, ADD_PARTY_PROGRESS, ADD_USER_PROGRESS } from '../../../Redux/Admin/action/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPartyList = () => {
  const Auth = useRef()
  const Election = useRef()

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleCancel = () => {
    navigate("/Home")
  }

  const handlePartyAdd = () => {
    const partylist = {
      "Auth": Auth.current.value,
      "Election": Election.current.value
    }

    if (partylist.Auth && partylist.Election) {
      dispatch({ type: ADD_PARTYLIST_PROGRESS, payload: partylist })

      const add = toast.loading("Partylist Adding...");

      setTimeout(() => {

        Auth.current.value = ""
        Election.current.value = ""

        toast.dismiss(add)
        toast.success("Partylist Added Successfully!")
      }, 3000)
    }
    else {
      toast.warn("Please fill all fields !")
    }
  }

  return (
    <>
      <div className="login-field flex flex-col justify-center h-[100vh] items-center py-8 bg-[#1e293b] text-white">
        <div className="input-field border-2 border-color: rgb(29 78 216); w-[40%] h-auto rounded-md sm:m-[0] p-8 ">
          <div className="flex justify-between">
            <h3 className="font-bold text-[26px] mb-[35px]">Add New PartyList</h3>
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: "24px", cursor: "pointer" }} onClick={handleCancel} />
          </div>
          <h5 className="font-bold text-[18px] mb-[10px] border-b-2" >PartyList Details</h5>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter User Auth</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Auth} placeholder=" User Referance Id" />
          </div>
          <div>
            <label htmlFor='voterId' className="font-semibold mb-[10px]">Enter Election</label>
            <br />
            <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md text-black mb-[5px] w-[100%] m-[5px] p-1" ref={Election} placeholder="Election Reference Id" />
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[30%]" onClick={handlePartyAdd}>Add Party</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPartyList