/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import { useEffect, useState } from "react"
import { useDebounce } from 'use-debounce'
import { getUserAuthAPIClient } from "../services/api/user-auth-api.client"

export function useUsernameExists(username: string){
  const [isExists, setIsExists] = useState(null)
  const [debouncedInput] = useDebounce(username, 500)
  const userAuthAPIClient = getUserAuthAPIClient()

  useEffect(() => {
    if(debouncedInput && !_.isEmpty(debouncedInput)){
      userAuthAPIClient
        .checkUsernameExistis(debouncedInput)
        .then(({exist}) => setIsExists(exist))
    }
  }, [debouncedInput])

  return {
    username: username,
    exists: isExists
  }
}