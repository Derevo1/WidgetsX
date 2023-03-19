/* eslint-disable react-hooks/exhaustive-deps */
import style from './Authorization.module.css'
import _ from 'lodash'
import { Dispatch, useEffect, useState } from 'react'
import { useUsernameExists } from 'src/lib/hooks/check-username'
import { getUserAuthAPIClient } from 'src/lib/services/api/user-auth-api.client'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IAuthorizationProps } from './Authorization'

interface ISignUpProps extends IAuthorizationProps {
  hidde: boolean;
  setShowSignUpForm: Dispatch<React.SetStateAction<boolean>>;
}

export const SignUp = ({ hidde, setShowSignUpForm, setToken }: ISignUpProps) => {
  const [username, setUsername] = useState<string>(null)
  const [firstName, setFirstName] = useState<string>(null)
  const [lastName, setLastName] = useState<string>(null)
  const [password, setPassword] = useState<string>(null)
  
  const [isInputWrong, setWrongInput] = useState(false)
  const [allowToSubmit, setAllowToSubmit] = useState(false)

  const { username: debouncedUsername, exists } = useUsernameExists(username)

  const submitNewUser = async() => {
    if(!allowToSubmit){
      return
    }

    try {
      const { token } = await getUserAuthAPIClient()
        .submitNewUser({
          username,
          password: password,
          first_name: firstName,
          last_name: lastName,
        })

      setToken(token)
    } catch (error) {
      window.alert(_.get(error, 'data.message') ?? _.get(error, 'message'))
    }
  }


  useEffect(() => {
    if(_.isEmpty(username)){
      setWrongInput(false)
      return
    }

    setWrongInput(exists)
  }, [debouncedUsername, exists])

  useEffect(() => {
    const isFormCompleted = !_.isEmpty(debouncedUsername) && !exists && !_.isEmpty(password)

    setAllowToSubmit(isFormCompleted)
  }, [debouncedUsername, password, exists])
  
  
  if(hidde){
    return <></>
  }
  
  return (
    <>
      <div className={style.signup_container}>
        <div className={style.signup_container_items}>
          <AiOutlineArrowLeft style={{cursor: 'pointer'}} onClick={() => setShowSignUpForm(false)} />
          <h2>Sign Up</h2>
          <div className={style.signup_container_block}>
            <input 
              type='text'
              value={firstName || ''}
              className={style.signin_container_items_input}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First name' 
            />
            <input 
              type='text'
              value={lastName || ''}
              className={style.signin_container_items_input}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last name' 
            />
          </div>
          <input 
              type='text'
              value={username || ''}
              className={[style.signin_container_items_input, isInputWrong ? style.err_input : ''].join(' ')}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username' 
            />
            <input 
              type='password'
              value={password || ''}
              className={style.signin_container_items_input}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' 
            />
            <button 
              className={[style.authorization_button, !allowToSubmit ? style.button_disabled : '' ].join(' ')}
              onClick={submitNewUser}
            >
              Sign up
            </button>
        </div>
      </div>
    </>
  )
}