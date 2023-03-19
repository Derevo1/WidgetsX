/* eslint-disable react-hooks/exhaustive-deps */
import style from './Authorization.module.css'
import { Dispatch, useState } from 'react'
import { Illustration } from './Illustration/Illustration'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export interface IAuthorizationProps {
  setToken?: Dispatch<React.SetStateAction<string>>
}

export function Authorization({ setToken }: IAuthorizationProps){
  const [showSignUpForm, setShowSignUpForm] = useState(false)

  return (
    <div className={style.container}>
      <div className={style.illustration_container}>
        <Illustration />
      </div>
      <div className={style.forms_container}>
        <SignIn hidde={showSignUpForm} setToken={setToken} />
        <SignUp hidde={!showSignUpForm} setToken={setToken} setShowSignUpForm={setShowSignUpForm} />
        {
          !showSignUpForm &&
            <div className={style.signup_label} onClick={() => setShowSignUpForm(true)}>
              <p>Don't have an account? Create</p>
            </div>
        }
      </div>
    </div>
  )
}