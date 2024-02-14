import React from 'react';
import './App.scss';
import UserList from './components/User-List/User-List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInformation from './components/UserInformation/UserInformation';
import Login from './components/Login/Login';
import UserPosts from './components/UserPosts/UserPosts';
import UserDetails from './components/User-Details/User-Details';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='user-details' element={<UserDetails AddNewUser={() => { }} ></UserDetails>}></Route>
          <Route path='' element={<Login></Login>}> </Route>
          <Route path='user-list' element={<UserList></UserList>}></Route>
          <Route path='userInformation' element={<UserInformation></UserInformation>}>
            <Route path='posts' element={<UserPosts></UserPosts>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
