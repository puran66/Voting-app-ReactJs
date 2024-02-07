import React from 'react'


const Login_with_number = () => {

  return (
    <>
      <div className="login">
        <div className="login-w-id grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <div className="logo bg-[#1e293b] text-white w-full h-[60vh] sm:h-[100vh] lg:text-[32px] text-[24px] sm:text-[18px] md:text-[22px] font-bold text-center flex items-center justify-center">
            {/* <img src="https://www.flaticon.com/free-icon/online-voting_10346926?term=online+voting&page=1&position=15&origin=tag&related_id=10346926" alt="logo" /> */}
            <h3>Voting App</h3>
            <p>Make Things Digital</p>
          </div>
          <div className="login-field w-full h-[60vh] sm:h-[100vh] sm:flex flex-col justify-center items-center">
            <div className="input-field border-2 border-color: rgb(29 78 216); p-[20px] lg:w-[400px] md:w-[300px] rounded-md sm:m-[0] mx-[30px] mt-[60px]">
              <h3 className="font-bold text-[26px] mb-[35px]">Login<a className="text-[12px] text-blue-700">Registration</a></h3>
              <h5 className="font-bold text-[18px] mb-[10px] border-b-2" >Indian Resident Elector</h5>
              <div>
                <label htmlFor='voterId' className="font-semibold mb-[5px]">Register with Mobile no.*</label>
                <br />
                <input type="text" className="border-2 border-color: rgb(29 78 216); rounded-md mb-[5px] w-[100%] mt-[5px] " />
              </div>
              <p className="flex font-light mb-[35px]">log In With <h5 className="font-bold"> Voter ID.</h5>?</p>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] ">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login_with_number;