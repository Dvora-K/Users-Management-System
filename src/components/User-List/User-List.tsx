import React, { FC, useState, useEffect, useRef } from 'react';
import './User-List.scss';
import UserModel from '../../models/UserModel';
import apiService from '../../services/api.service';
import Loader from '../Loader/Loader';
import UserDetails from '../User-Details/User-Details';
import MyModal from '../My-Modal/My-Modal';
import { Outlet, useNavigate } from 'react-router-dom';

interface UserListProps { }

const UserList = () => {
  
  const [UserList, setUserList] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [FilterList, setFilterList] = useState<UserModel[]>([]);
  const [isModalDisplay, setIsModalDisplay] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<UserModel>(new UserModel("", "", "", ""));
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const searchRef = useRef<any>('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, [])

  const goToUserInfo = (id: string) => {
    navigate('/userInformation', { state: id })
  }

  const getUsers = () => {
    apiService.getUserList().then((res) => {
      setIsLoading(false);
      let newList = res.data.map((user: any, index: number) => (new UserModel(user.id, user.name, user.username, user.email)));
      setUserList(newList);
      setFilterList(newList);
    })
  }

  const Search = () => {
    let searchValue = searchRef.current.value.toLowerCase();
    if (searchValue == '') {
      setFilterList([...UserList])
    }
    else {
      let filterUserList = UserList.filter((user) => user.name.toLowerCase().startsWith(searchValue));
      setFilterList(filterUserList);
    }
  }

  const AddNewUser = (newUser: UserModel) => {
    UserList.push(newUser);
    setUserList([...UserList])
    setFilterList([...UserList]);
  }

  const deleteUserFromList = () => {
    setIsModalDisplay(false)
    apiService.deleteUser(userToDelete.id).then(res => {
      let index = UserList.findIndex(u => u.id == userToDelete.id);
      UserList.splice(index, 1);
      setUserList([...UserList]);
      setFilterList([...UserList])
    }).catch(err => { setIsFailed(true) })
  }

  const onCancel = () => {
    setIsModalDisplay(false);
  }

  return <div className="User-List">
    <div className="container-fluid">
      <div className='row'>
        <div className='col-md-4 mt6'>
          <br></br>
          <UserDetails AddNewUser={AddNewUser} ></UserDetails>
        </div>

        <div className="col-md-8">
          {isModalDisplay ? <MyModal onCancel={onCancel} onConfirm={deleteUserFromList} title='מחיקה' ><p>אתה בטוח שברצונך למחוק את {userToDelete?.name}?</p></MyModal> : ''}
          {isFailed ? <MyModal title='אופססס' onCancel={() => { setIsFailed(false) }} onConfirm={() => { setIsFailed(false) }} > <p>😖 מחיקת המשתמש נכשלה </p></MyModal> : ""}
          {isLoading ? <Loader title='Loading'></Loader> :
            <div>
              <br></br>
              <input id='search' ref={searchRef} onChange={Search} className='form-control' type="text" placeholder="Search User" /><br></br>
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {FilterList.length > 0 ? FilterList.map((user: UserModel, index: number) => {
                    return <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <button onClick={() => { setUserToDelete(user); setIsModalDisplay(true); }}>delete</button>
                      <button className='det' onClick={() => { goToUserInfo(user.id) }}>more details</button>
                    </tr>
                  }) : 'No One Found'}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
}

export default UserList;