import style from './Authorization.module.css'
import { Illustration } from './Illustration/Illustration'

export function Authorization(){
  return (
    <div className={style.container}>
      <div className={style.illustration_container}>
        <Illustration />
      </div>
      <div className={style.signin_container}>
        <div className={style.signin_container_items}>
          <h2>Welcome Back</h2>
          <div>
            <p>Email</p>
            <input type='text' placeholder='Email address' />
          </div>
          <div>
            <p>Password</p>
            <input type='password' placeholder='Password' />
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}