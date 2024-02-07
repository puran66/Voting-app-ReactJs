import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_VOTES_PROGRESS } from '../../../Redux/Admin/action/action';

const Votes = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type :GET_VOTES_PROGRESS})
  })
  return (
    <div>Votes</div>
  )
}

export default Votes