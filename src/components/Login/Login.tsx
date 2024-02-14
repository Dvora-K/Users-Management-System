import React, { FC } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

interface LoginProps { }

const Login: FC<LoginProps> = () => {

  const navigate = useNavigate();

  return <div className='Login'>
    <nav className="navbar navbar-light" style={{ backgroundColor: "#0e1115" }}>
      <a style={{ color: "#fff" }} onClick={() => { navigate('user-details') }}>Add New User</a>
      <a style={{ color: "#fff" }} onClick={() => { navigate('user-list') }}>User-List</a>
      <a style={{ color: "#fff" }} onClick={() => { navigate('/') }}>Log-in</a>
    </nav>

    <br></br> <br></br><br></br><br></br>
    <h3>Log In</h3>
    <br></br>
    <div className="form__field">
      <input name='name' type="text" placeholder={'UserName'} className='form-control'></input>
    </div>
    <div className="form__field">
      <input name='name' type='text' placeholder={'Email'} className='form-control'></input>
    </div>
    <button onClick={() => navigate('user-details')}>Log In</button>
  </div>


}

export default Login;
