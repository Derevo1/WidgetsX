import { ReactNode } from "react"
import { Authorization } from "./Authorization"

interface IAuthorizationWrapperProps {
  children: ReactNode
}

export function AuthorizationWrapper({ children }: IAuthorizationWrapperProps){
  const isAuthorized = false

  return (
    <>
      {!isAuthorized ? <Authorization /> : children}
    </>
  )
}