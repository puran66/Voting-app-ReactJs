import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { DELETE_PARTY_PROGRESS, GET_PARTY_PROGRESS, UPDATE_PARTY_PROGRESS } from '../../../Redux/Admin/action/action';
import { toast } from 'react-toastify';

const Parties = () => {
  const [searchInput, setSearch] = useState("");
  const [showView, setShow] = useState("none")
  const [hideMain, setHide] = useState("block")
  const [view, setView] = useState([])
  const allParties = useSelector((state) => state.userReducer.parties)

  console.log(allParties);

  const isMobileSmallScreen = useMediaQuery({ maxWidth: 500 });
  const isBigScreen = useMediaQuery({ minWidth: 501, maxWidth: 1536 });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get all users data from the server.



  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS })
  }, [])

  const handleDelete = (id, index) => {
    dispatch({ type: DELETE_PARTY_PROGRESS, payload: { id, index } })
  }

  const handleView = (index) => {
    console.log(index, allParties[index]);
    setView(allParties[index]);
    setHide("none")
    setShow("block");
  }

  const handleChange = (e) => {
    setView({ ...view, [e.target.name]: e.target.value })
    console.log(view);
  }

  const handleUpdate = () => {
    dispatch({ type: UPDATE_PARTY_PROGRESS, payload: view })

    const update =  toast.loading("Updating Data...")
    setTimeout(()=>{
      toast.dismiss(update);

      navigate("/Parties")
      toast.success("Updated Data Successfully!")
    },4000)
  }

  const handleClose = () => {
    setShow('none');
    setHide('block')
  }

  console.log(allParties);
  return (
    <>
      <div style={{ display: hideMain }}>
        {/* search data  */}
        <form className="mt-5  sm:w-[80%] w-[80%] m-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Party..."
              required=""
              onChange={(e) => handleSearch(e)}
            />
            <button
              type="submit"
              className="text-white absolute bottom-2.5 right-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>


        {/* table for user data */}
        {
          allParties ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full m-auto mt-14">
              {
                isMobileSmallScreen && (
                  <table className="w-[70%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Party Profile
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Party Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.log(allParties)
                        .filter((item) => {
                          return (
                            searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                          );
                        })
                        .map((item, ind) => (
                          <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 lg:text-[18px] sm:text-[16px] text-[14px]">
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={item.Profile} alt="profile-img" className="w-[70px] h-[40px] sm:w-[80px] sm:h-[50px] object-cover" />
                            </td>
                            <td className="px-4 py-3">{item.pName}</td>
                            <td className="px-4 py-3">{item.shortCode}</td>
                            <td className="">
                              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleView(ind)}>
                                More...
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )
              }
              {
                isBigScreen && (
                  <table className="w-[70%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Party Profile
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Party Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Party short Code
                        </th>
                        <th scope="col" className="px-4 py-3">
                        </th>
                        <th scope="col" className="px-4 py-3">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allParties
                        .filter((item) => {
                          return (
                            searchInput.toLocaleLowerCase() === "" ? item : item.pName.toLocaleLowerCase().includes(searchInput)
                          );
                        })
                        .map((item, ind) => (
                          <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 lg:text-[18px] sm:text-[16px] text-[14px]">
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={item.Profile} alt="profile-img" className="w-[70px] h-[40px] sm:w-[80px] sm:h-[50px] object-cover" />
                            </td>
                            <td className="px-4 py-3">{item.pName}</td>
                            <td className="px-4 py-3">{item.shortCode}</td>
                            <td className="">
                              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleView(ind)}>
                                Update
                              </button>
                            </td>
                            <td className="">
                              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleDelete(item._id, ind)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )
              }
            </div>
          ) : (
            toast.loading("Parties  are loading...")
          )
        }

      </div>

      {/* update field  */}

      {
        view && (
          <div style={{ display: showView }}>
            <div className="login-field w-full h-[100vh] flex flex-col justify-center items-center">
              <div className="input-field border-2 border-color: rgb(29 78 216);  p-5  sm:w-[40%] w-[60%] sm:p-5 my-16 sm:text-[16px] text-[12px] rounded-md sm:m-[0] ">
                <div className="flex justify-between border-b-2">
                  <h5 className="font-bold text-[18px] mb-[10px]" >Update Details</h5>
                  <FontAwesomeIcon icon={faXmark} style={{ fontSize: "24px", cursor: "pointer" }} onClick={handleClose} />
                </div>
                <div className="image flex justify-center">
                  <img src={view.Profile} alt="profile-img" className=" rounded-full my-2 w-[80px]" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Profile Image Link</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Profile} onChange={(e) => handleChange(e)} name="Profile" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Party Name</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.pName} onChange={(e) => handleChange(e)} name="pName" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Party shortCode</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.shortCode} onChange={(e) => handleChange(e)} name="shortCode" />
                </div>
                <div className="flex justify-center mt-3">
                  <button className="text-white sm:text-[16px] text-[12px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg sm:px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[30%] sm:w-[40%]" onClick={() => handleUpdate()}>Update</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default Parties;