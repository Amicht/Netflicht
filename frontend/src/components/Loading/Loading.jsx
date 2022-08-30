import React from 'react'
import { useContext } from 'react'
import { StoreCtxt } from '../../services/StoreService'
import './Loading.css'

const Loading = () => {
  const {loadingImg } = useContext(StoreCtxt).states;
  
  return (
    <div className='loading bg-black'>
        <div className="spinner-border text-danger spinner-loading" style={{width:6 + "rem", height: 6 +"rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className='loading-logo'>
          <img src={loadingImg} alt="Current user loading logo"/>
        </div>
    </div>
  )
}

export default Loading