import React from 'react'

const IconProfile = ({img,title}) => {
  return (
    <div className="d-flex mb-2 bg-profile">
        <img className="nav-icon" alt={title+' img'} src={img}/>
        <span className="profile-choice">{title}</span>
    </div>
  )
}

export default IconProfile