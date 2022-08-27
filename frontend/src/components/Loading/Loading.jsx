import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'

const Loading = () => {
  return (
    <div className='loading'>
        <Spinner 
          className='bg-transparent mt-5' 
          animation="border"
          variant="danger" />
    </div>
  )
}

export default Loading