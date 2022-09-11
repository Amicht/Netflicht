import React from 'react'
import './UserProfile.css';

const UserProfile = ({name, _id, img, changeUser}) => {
  const onUserClick = () => changeUser({ _id, img },false);

  return (
    <div className='col-sm profile-container' onClick={onUserClick}>
        <div >
            <img className='user-profile-img' src={img} alt={name + " Profile image"}/>
        </div>
        <div className='fs-3'>
            <span >{name}</span>
        </div>
    </div>
  )
}

export default UserProfile