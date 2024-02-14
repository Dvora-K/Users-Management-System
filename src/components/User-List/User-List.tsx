import React, { FC, useState, useEffect, useRef } from 'react';
import './User-List.scss';
import UserModel from '../../models/UserModel';
import apiService from '../../services/api.service';
import Loader from '../Loader/Loader';
import UserDetails from '../User-Details/User-Details';
import MyModal from '../My-Modal/My-Modal';
<<<<<<< HEAD
import { Outlet, useNavigate } from 'react-router-dom';
=======
>>>>>>> origin/main

interface UserListProps { }

const UserList = () => {
<<<<<<< HEAD
  
=======
>>>>>>> origin/main
  const [UserList, setUserList] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [FilterList, setFilterList] = useState<UserModel[]>([]);
  const [isModalDisplay, setIsModalDisplay] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<UserModel>(new UserModel("", "", "", ""));
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const searchRef = useRef<any>('');
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> origin/main

  useEffect(() => {
    getUsers();
  }, [])

<<<<<<< HEAD
  const goToUserInfo = (id: string) => {
    navigate('/userInformation', { state: id })
  }

=======
>>>>>>> origin/main
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
<<<<<<< HEAD
      let filterUserList = UserList.filter((user) => user.name.toLowerCase().startsWith(searchValue));
=======
      let filterUserList = FilterList.filter((user) => user.name.toLowerCase().startsWith(searchValue));
>>>>>>> origin/main
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
<<<<<<< HEAD
        <div className='col-md-4 mt6'>
=======
        <div className='col-md-6 mt6'>
>>>>>>> origin/main
          <br></br>
          <UserDetails AddNewUser={AddNewUser} ></UserDetails>
        </div>

<<<<<<< HEAD
        <div className="col-md-8">
=======
        <div className="col-md-6">
>>>>>>> origin/main
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
<<<<<<< HEAD
                    <th scope="col">Options</th>
=======
                    <th scope="col"></th>
>>>>>>> origin/main
                  </tr>
                </thead>
                <tbody>
                  {FilterList.length > 0 ? FilterList.map((user: UserModel, index: number) => {
                    return <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
<<<<<<< HEAD
                      <button onClick={() => { setUserToDelete(user); setIsModalDisplay(true); }}>delete</button>
                      <button className='det' onClick={() => { goToUserInfo(user.id) }}>more details</button>
=======
                      <button onClick={() => { setUserToDelete(user); setIsModalDisplay(true); }}> delete </button>
>>>>>>> origin/main
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