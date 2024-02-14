import React, { FC, useEffect, useState } from 'react';
import './UserPosts.scss';
import { useLocation, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';
import MyModal from '../My-Modal/My-Modal';
import { get } from 'http';

interface UserPostsProps { }

const UserPosts: FC<UserPostsProps> = () => {
  
  const location = useLocation();
  const [userPostsArray, setUserPostsArray] = useState<any>([])
  const [index, setIndex] = useState<number>(-1);
  const userId = location.state;

  useEffect(() => {
    getUserPosts();
  }, []);


  const getUserPosts = () => {
    apiService.getPosts().then((res) => {
      let userPosts = res.data.filter((p: any) => p.userId == userId);
      setUserPostsArray(userPosts);
    })
  }

  const onCancel = () => {
    setIndex(-1);
  }

  return <div className="UserPosts">
    {index != -1 ? <MyModal title={userPostsArray[index].title} onCancel={onCancel} onConfirm={onCancel} ><p>{userPostsArray.id}:{userPostsArray[index].body}</p></MyModal> : ''}
    <div className='col-sm-6'>
      {userPostsArray.map((post: any, index: number) => {
        return <button onClick={() => setIndex(index)}>post {post.id}</button>
      })}
    </div>
  </div>
}

export default UserPosts;
