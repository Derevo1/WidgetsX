/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import { ReactNode, useEffect, useState } from "react"
import { getUserAuthAPIClient } from 'src/lib/services/api/user-auth-api.client'
import { Authorization } from "./Authorization"

interface IAuthorizationWrapperProps {
  children: ReactNode
}

export function AuthorizationWrapper({ children }: IAuthorizationWrapperProps){
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))

  const userAuthAPIClient = getUserAuthAPIClient()

  useEffect(() => {
    if(_.isEmpty(token)){
      setIsAuthorized(false)
      return
    }

    userAuthAPIClient
      .validateAccessToken(token)
      .then(({ valid }) => {
        setIsAuthorized(valid)
        localStorage.setItem('token', token)
      })
  }, [token])

  return (
    <>
      {!isAuthorized && !process.env.REACT_APP_DISABLE_AUTH ? <Authorization setToken={setToken} /> : children}
    </>
  )
}