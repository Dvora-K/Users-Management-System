import React, { FC, useEffect, useState } from 'react';
import './UserInformation.scss';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

interface UserInformationProps { }

const UserInformation: FC<UserInformationProps> = () => {

  const [userInfo, setUserInfo] = useState<any>({});
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state;

  useEffect(() => {
    getUserInfo();
  }, [userId]);

  const getUserInfo = () => {
    apiService.getUserInfo(userId ? userId : '').then(res => {
      setUserInfo(res.data)
    })
  }

  const showPosts = () => {
    navigate('posts', { state: userInfo.id })
  }

  return <div className="UserInformation row">
    <div className='col-sm-6'>
      <ul>
        <li> Id: {userInfo.id}</li>
        <li> Name: {userInfo.name}</li>
        <li> Email: {userInfo.email}</li>
        {/* <li> Address: {userInfo.address.street}, {userInfo.address.city}, {userInfo.address.suite}</li> */}
        <li> Phone: {userInfo.phone}</li>
        <li> Site: {userInfo.website}</li>
        {/* <li> Company: {userInfo.company.name}</li> */}
      </ul>
      <button onClick={showPosts}>show posts</button>
    </div>
    <Outlet></Outlet>
  </div>
}

export default UserInformation;
