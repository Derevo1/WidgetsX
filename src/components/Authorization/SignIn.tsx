/* eslint-disable react-hooks/exhaustive-deps */
import style from './Authorization.module.css'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { getUserAuthAPIClient } from 'src/lib/services/api/user-auth-api.client'
import { useUsernameExists } from 'src/lib/hooks/check-username'
import { IAuthorizationProps } from './Authorization'

interface ISignInProps extends IAuthorizationProps {
  hidde: boolean
}

export const SignIn = ({ hidde, setToken }: ISignInProps) => {
  const [login, setLogin] = useState<string>(null)
  const [password, setPassword] = useState<string>(null)
  const [isInputWrong, setWrongInput] = useState(false)

  const userAuthAPIClient = getUserAuthAPIClient()
  const { username, exists } = useUsernameExists(login)

  const submitUserCreds = async() => {
    if(!_.isEmpty(login) && !_.isEmpty(password)){
      try {
        const { token } = await userAuthAPIClient.submitUserCreds({ username: login, password })  
        setToken(token)      
      } catch (error) {
        window.alert(_.get(error, 'data.message') ?? _.get(error, 'message'))
      }
    }
  }

  useEffect(() => {
    if(_.isEmpty(username)){
      setWrongInput(false)
      return
    }

    setWrongInput(!exists)
  }, [username, exists])

  if(hidde){
    return <></>
  }

  return (
    <>
      <div className={style.signin_container}>
        <div className={style.signin_container_items}>
          <h2>Welcome Back</h2>
          <div>
            <p>Email</p>
            <input 
              type='text'
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
            onClick={submitUserCreds}
            className={[style.authorization_button, isInputWrong ? style.button_disabled : '' ].join(' ')}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  )
}