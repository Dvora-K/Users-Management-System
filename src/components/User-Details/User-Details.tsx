import React, { FC } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import './User-Details.scss';
import UserModel from '../../models/UserModel';

interface UserDetailsProps {
  AddNewUser: (userToAdd: UserModel) => void
}

const UserDetails: FC<UserDetailsProps> = (props: UserDetailsProps) => {

  const form = useFormik({
    initialValues: new UserModel("", "", "", ""),
    onSubmit: (newUser: UserModel) => {
      props.AddNewUser(newUser);
      // alert(JSON.stringify(newUser) + " Added successfully")
      form.resetForm();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('שדה חובה').min(2),
      id: Yup.string()
        .required('שדה חובה')
        .matches(/^[0-9]+$/, 'ID must contain only numbers').min(9),
      username: Yup.string().required('שדה חובה').min(2),
      email: Yup.string().required('שדה חובה').email()
    })
  })

  return <div className="User-Details">
    <div className="grid align__item">

      <div className="register">

        <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb" /><stop offset="100%" stop-color="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>

        <h2>Add User</h2>

        <form onSubmit={form.handleSubmit} action="" method="post" className="form">

          <div className="form__field">
            <input name='name' value={form.values.name} placeholder={'Insert name'} onChange={form.handleChange} className={form.errors.name ? 'form-control is-invalid' : 'form-control'}></input>
            {form.errors.name ? <small>{form.errors.name}</small> : ''}
          </div>

          <div className='form__field'>
            <input name='id' value={form.values.id} placeholder={'Insert ID'} onChange={form.handleChange} className={form.errors.id ? 'form-control is-invalid' : 'form-control'} ></input>
            {form.errors.id ? <small>{form.errors.id}</small> : ''}
          </div>

          <div className='form__field'>
            <input name='username' value={form.values.username} placeholder={'Insert username'} onChange={form.handleChange} className={form.errors.username ? 'form-control is-invalid' : 'form-control'}></input>
            {form.errors.username ? <small>{form.errors.username}</small> : ''}
          </div>

          <div className='form__field'>
            <input name='email' value={form.values.email} placeholder={'Insert email'} onChange={form.handleChange} className={form.errors.email ? 'form-control is-invalid' : 'form-control'} ></input>
            {form.errors.email ? <small>{form.errors.email}</small> : ''}
          </div>
          <div className="form__field">
            <input type="submit" value="Add User" />
          </div>
        </form>

      </div>

    </div>
  </div>
}

export default UserDetails;