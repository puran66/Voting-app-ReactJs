import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <>
      <div className="help w-[100%] h-[100vh] flex justify-center items-center bg-[#1e293b] text-white relative">
        <Link to="/Vote">
          <FontAwesomeIcon icon={faArrowLeft} className="text-[22px] absolute top-5 left-10" />
        </Link>
        <div className="help-info w-[45%] h-[40%]">
          <h1 className="md:text-[30px] sm:text-[24px] text-[20px] mb-5 font-bold">HelpLine Contact</h1>
          <ul>
            <li className="text-[18px] font-bold flex gap-3">Address <p className="font-light">: xyz society naer ik road, near gymkhana, pune.</p></li>
            <li className="text-[18px] font-bold flex gap-3">Phone Number : <p className="font-light">+91 8043267569</p></li>
            <li className="text-[18px] font-bold flex gap-3">Email ID : <p className="font-light">help@helpline.com</p></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Help