import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

// datos para logear
//jose@hotmail.com
// Jose amaya
//12345678
// el backEnd ahora me entrega un token.

const LoginPage = () => {

  const {reset, handleSubmit, register} = useForm()
  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <section className='container_loginPage'>
      <header className='LoginPage__header'>
        <img className='img LoginPage' src="/images/img-login.png" alt="" />
      </header>
      <form className='LoginPage__form' onSubmit={handleSubmit(submit)}>
        <h2 className='LoginPage__title'>Login</h2>
        <div className='LoginPage email'>
          <label className='LoginPage__label' htmlFor="email">Email</label>
          <input className='LoginPage__input' {...register("email")}  type="email" id="email"/>
        </div>
        <div className='LoginPage password'>
          <label className='LoginPage__label' htmlFor="password">Password</label>
          <input className='LoginPage__input' {...register("password")} type="password" id="password"/>
        </div>
        <button className='LoginPage__btn'>Submit</button>
        <div className='LoginPage__navigate'>
          <span>Do you have an account?</span>
          <Link to='/auth/register'> Go to register</Link>
        </div>
      </form>
      
    </section>
  )
}

export default LoginPage