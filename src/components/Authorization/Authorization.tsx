/* eslint-disable react-hooks/exhaustive-deps */
import style from './Authorization.module.css'
import _ from 'lodash'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'
import { getUserAuthAPIClient } from 'src/lib/services/api/user-auth-api.client'
import { Illustration } from './Illustration/Illustration'

export function Authorization(){
  const [login, setLogin] = useState<string>(null)
  const [password, setPassword] = useState<string>(null)
  const [isInputWrong, setWrongInput] = useState(false)
  const [defferedLogin] = useDebounce(login, 500)

  const userAuthAPIClient = getUserAuthAPIClient()

  useEffect(() => {
    if(!defferedLogin?.length){
      setWrongInput(false)
      return
    }

    if(defferedLogin && !_.isEmpty(defferedLogin)){
      userAuthAPIClient
        .checkUsernameExistis(defferedLogin)
        .then(({exists}) => setWrongInput(!exists))
    }
  }, [defferedLogin])

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
            <input 
              type='text'
              value={login || ''}
              className={[style.signin_container_items_input, isInputWrong ? style.err_input : ''].join(' ')}
              onChange={(e) => setLogin(e.target.value)}
              placeholder='Username' 
            />
          </div>
          <div>
            <p>Password</p>
            <input 
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              className={style.signin_container_items_input}
              placeholder='Password' 
            />
          </div>
          <button
            onClick={async() => {
              if(!_.isEmpty(login) && !_.isEmpty(password))
                await userAuthAPIClient.submitUserCreds({ username: login, password })
            }}
          >
            Sign in
          </button>
          <div className={style.signup_label}>
            <p>Don't have an account? Create</p>
          </div>
        </div>
      </div>
    </div>
  )
}