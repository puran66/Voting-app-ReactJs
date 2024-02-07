import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { DELETE_USER_PROGRESS, GET_USER_PROGRESS, UPDATE_USER_PROGRESS } from '../../../Redux/Admin/action/action';

const Users = () => {
  const [searchInput, setSearch] = useState("");
  const [showView, setShow] = useState("none")
  const [hideMain, setHide] = useState("block")
  const [view, setView] = useState([])
  const allUsers = useSelector((state) => state.userReducer.users)
  const state = useSelector((state) => state)

  const isMobileSmallScreen = useMediaQuery({ maxWidth: 336 });
  const isMobileScreen = useMediaQuery({ minWidth: 337, maxWidth: 600 });
  const isSmallScreen = useMediaQuery({ minWidth: 601, maxWidth: 768 });
  const isMediumScreen = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isBigScreen = useMediaQuery({ minWidth: 1025, maxWidth: 1536 });

  const dispatch = useDispatch();

  // Get all users data from the server.

  useEffect(() => {
    dispatch({ type: GET_USER_PROGRESS })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  useEffect(() => {
    dispatch({ type: GET_USER_PROGRESS })
  }, [])

  const handleDelete = (id, index) => {
    dispatch({ type: DELETE_USER_PROGRESS, payload: { id, index } })
  }

  const handleView = (index) => {
    console.log(index,allUsers[index]);
    setView(allUsers[index]);
    setHide("none")
    setShow("block");
  }

  const handleChange = (e) => {
    setView({ ...view, [e.target.name]: e.target.value })
    console.log(view);
  }

  const handleUpdate = () => {
    dispatch({ type: UPDATE_USER_PROGRESS, payload: view })
  }

  const handleClose = () => {
    setShow('none');
    setHide('block')
  }

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
              placeholder="Search User..."
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full m-auto mt-14">
          {
            isMobileSmallScreen && (
              <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-1">
                      User Email
                    </th>
                    <th scope="col" className="px-2 py-1">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers
                    .filter((item) => {
                      return (
                        searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                      );
                    })
                    .map((item, ind) => (
                      <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-2 py-1">{item.Email}</td>
                        <td className="p-4">
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
            isMobileScreen && (
              <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-1">
                      User Profile
                    </th>
                    <th scope="col" className="px-2 py-1">
                      Email
                    </th>
                    <th scope="col" className="px-2 py-1">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers
                    .filter((item) => {
                      return (
                        searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                      );
                    })
                    .map((item, ind) => (
                      <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={item.Profile} alt="profile-img" className="w-[80px] h-[50px] sm:w-[50px] sm:h-[30px] object-cover" />
                        </td>
                        <td className="px-2 py-1">{item.Email}</td>
                        <td className="px-2 py-1">
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
            isSmallScreen && (
              <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      User Profile
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      View
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers
                    .filter((item) => {
                      return (
                        searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                      );
                    })
                    .map((item, ind) => (
                      <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={item.Profile} alt="profile-img" className="w-[80px] h-[50px] sm:w-[50px] sm:h-[30px] object-cover" />
                        </td>
                        <td className="px-4 py-3">{item.Name}</td>
                        <td className="px-4 py-3">{item.Email}</td>
                        <td className="px-4 py-3">
                          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleView(ind)}>
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
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
          {
            isMediumScreen && (
              <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      User Profile
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      View
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers
                    .filter((item) => {
                      return (
                        searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                      );
                    })
                    .map((item, ind) => (
                      <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={item.Profile} alt="profile-img" className="w-[80px] h-[50px] sm:w-[50px] sm:h-[30px] object-cover" />
                        </td>
                        <td className="px-4 py-3">{item.Name}</td>
                        <td className="px-4 py-3">{item.Phone}</td>
                        <td className="px-4 py-3">{item.Email}</td>
                        <td className="px-4 py-3">
                          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleView(ind)}>
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
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
          {
            isBigScreen && (
              <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      User Profile
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Sex
                    </th>
                    <th scope="col" className="px-4 py-3">
                      DOB
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-4 py-3">
                      View
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers
                    .filter((item) => {
                      return (
                        searchInput.toLocaleLowerCase() === "" ? item : item.Name.toLocaleLowerCase().includes(searchInput)
                      );
                    })
                    .map((item, ind) => (
                      <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={item.Profile} alt="profile-img" className="w-[80px] h-[50px] sm:w-[50px] sm:h-[30px] object-cover" />
                        </td>
                        <td className="px-4 py-3">{item.Name}</td>
                        <td className="px-4 py-3">{item.Sex}</td>
                        <td className="px-4 py-3">{item.DOB}</td>
                        <td className="px-4 py-3">{item.Phone}</td>
                        <td className="px-4 py-3">{item.Email}</td>
                        <td className="px-4 py-3">{item.Address}</td>
                        <td className="px-4 py-3">
                          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleView(ind)}>
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
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

      </div>

      {/* update field  */}

      {
        view && (
          <div style={{display : showView}}>
            <div className="login-field w-full h-[100vh] flex flex-col justify-center items-center">
              <div className="input-field border-2 border-color: rgb(29 78 216);  p-5  sm:w-[50%] w-[80%] sm:p-5 my-16 sm:text-[16px] text-[12px] rounded-md sm:m-[0] ">
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
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Name</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Name} onChange={(e) => handleChange(e)} name="Name" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Sex</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Sex} onChange={(e) => handleChange(e)} name="Sex" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">DOB</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.DOB} onChange={(e) => handleChange(e)} name="DOB" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Phone</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Phone} onChange={(e) => handleChange(e)} name="Phone" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Email</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Email} onChange={(e) => handleChange(e)} name="Email" />
                </div>
                <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Address</label>
                  <br />
                  <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] m-[5px] p-1" value={view.Address} onChange={(e) => handleChange(e)} name="Address" />
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

export default Users