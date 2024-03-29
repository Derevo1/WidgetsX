/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import { ReactNode, useEffect, useState } from "react"
import { getUserAuthAPIClient } from 'src/lib/services/api/user-auth-api.client'
import { Authorization } from "./Authorization"

interface IAuthorizationWrapperProps {
  children: ReactNode
}

export const TOKEN_KEY = 'widgetsx_token'

export function AuthorizationWrapper({ children }: IAuthorizationWrapperProps){
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY))

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
        localStorage.setItem(TOKEN_KEY, token)
      })
  }, [token])

  return (
    <>
      {!isAuthorized && !process.env.REACT_APP_DISABLE_AUTH ? <Authorization setToken={setToken} /> : children}
    </>
  )
}