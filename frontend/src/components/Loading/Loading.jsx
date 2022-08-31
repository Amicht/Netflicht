import React from 'react'
import { useContext } from 'react'
import { StoreCtxt } from '../../services/StoreService'
import './Loading.css'

const Loading = () => {
  const {loadingImg } = useContext(StoreCtxt).states;
  const marginTop = (window.innerHeight / 2) - 50;
  
  return (
    <div className='loading bg-black' style={{marginTop: marginTop}}>
        <div className="spinner-border text-danger spinner-loading" role="status">
        </div>
        <div className='loading-logo'>
          <img src={loadingImg} alt="Current user loading logo"/>
        </div>
    </div>
  )
}

export default Loading