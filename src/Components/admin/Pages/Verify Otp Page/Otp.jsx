import React from 'react'


const Otp = () => {

  return (
    <>
      <div className="login-with-mobile">
        <div className="login-w-id grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <div className="logo bg-[#1e293b] text-white w-full h-[60vh] sm:h-[100vh] lg:text-[32px] text-[24px] sm:text-[18px] md:text-[22px] font-bold text-center flex items-center justify-center">
            {/* <img src="https://www.flaticon.com/free-icon/online-voting_10346926?term=online+voting&page=1&position=15&origin=tag&related_id=10346926" alt="logo" /> */}
            <h3>Voting App</h3>
            <p>Make Things Digital</p>
          </div>
          <div className="login-field w-full h-[60vh] sm:h-[100vh] sm:flex flex-col justify-center items-center">
            <div className="input-field border-2 border-color: rgb(29 78 216); p-[20px] lg:w-[400px] md:w-[300px] text-center rounded-md sm:m-[0] mx-[30px] mt-[60px]">
              <h3 className="font-bold text-[26px] mb-[20px]">Verify Your Otp</h3>
              <h5 className="font-bold text-[14px] mb-[20px] " >We send you the four digit code ro +91 1234567890 Enter the Code Below to comfirm your Mobile no.</h5>
              <div className="otp-box flex justify-between w-[200px] mb-[20px] m-auto">
                <input className="otp-input w-[40px] tex-[16px] m-[5px] p-[10px] text-center border border-gray-300 rounded-md bg-[#e9eaf3]" type="text" maxlength="1" />
                <input className="otp-input w-[40px] tex-[16px] m-[5px] p-[10px] text-center border border-gray-300 rounded-md bg-[#e9eaf3]" type="text" maxlength="1" />
                <input className="otp-input w-[40px] tex-[16px] m-[5px] p-[10px] text-center border border-gray-300 rounded-md bg-[#e9eaf3]" type="text" maxlength="1" />
                <input className="otp-input w-[40px] tex-[16px] m-[5px] p-[10px] text-center border border-gray-300 rounded-md bg-[#e9eaf3]" type="text" maxlength="1" />
              </div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-[30px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] ">Verify</button>

              <h3>Resend One-Time Password</h3>
              <p className="font-light text-[16px]">Entered a wrong number?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Otp;