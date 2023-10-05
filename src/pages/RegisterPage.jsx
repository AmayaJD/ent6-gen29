import '../styles/RegisterPage.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

//  BASE_URL ='https://playlist-share-dev.fl0.io/'
// {{BASE_URL_SONGS}}/api/auth/register
// {
//   "email": "test@test.com",//REQUIRED, Correct email format
//   "name": "fisrtname lastname",//REQUIRED, MinLenth: 8, MaxLength: 200
//   "password": "12345678"//REQUIRED, MinLenth: 1, MaxLength: 50
// }

//! datos registrados y guardados en el localStorage
//! jose@hotmail.com
//! Jose amaya
//! 12345678

const RegisterPage = () => {

  const { reset, handleSubmit, register} = useForm()
  const { registerUser } = useAuth()
  
  const submit = data => {
    registerUser(data)
    reset({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='container_register'>
      <img className='img register' src="/images/img-register.png" alt="" />
      <article className='register__article'>
      <h2 className='register__title'>Register</h2>
        <form className='register__form' onSubmit={handleSubmit(submit)}>
            <div className='form__input'>
              <label className='input__label' htmlFor="email">Email</label>
              <input className='input__value' {...register("email")}  type="email" id="email"/>
            </div>
            <div className='form__input'>
              <label className='input__label' htmlFor="name">Name</label>
              <input className='input__value' {...register("name")} type="name" id="name"/>
            </div>
            <div className='form__input'>
              <label className='input__label' htmlFor="password">Password</label>
              <input className='input__value' {...register("password")} type="password" id="password"/>
            </div>
          </form>
            <button className='register__btn'>Submit</button>
          <p className='register__navigate'>Are you register?
          <Link to='/auth/login'> Go to login <i className='bx bx-right-arrow-alt'></i> </Link></p>
      </article>
    </div>
  )
}

export default RegisterPage