import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Protected = (props) => {
  let Page = props.page;

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin-log")) {
      navigate("/");
      toast.warning("Please Login First!");
    }
  },[])
  return (
    <>
      <Page />
    </>
  )
}

export default Protected;