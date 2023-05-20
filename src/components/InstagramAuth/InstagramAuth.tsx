/* eslint-disable react-hooks/exhaustive-deps */
import styles from './InstagramAuth.module.css'
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "src/lib/hooks/redux"
import { changeAppLayout } from "src/state/app-layout/app-layout.slice"
import { Loader } from "../General/Loader"
import { AiOutlineCheck } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'
import { getInstagramAPIClient } from "src/lib/services/api/instagram-api.client"
import { TOKEN_KEY } from "../Authorization/AuthorizationWrapper"
import { BrandLogo } from '../General/BrandLogo'

export const InstagramAuth = () => {
  const client = getInstagramAPIClient(localStorage.getItem(TOKEN_KEY))
  
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorOccured, setIsErrorOccuerd] = useState(false)
  const dispatch = useAppDispatch()
  const [ params ] = useSearchParams()

  const code = params.get('code')
  const error = params.get('error')

  const closeTab = () => setTimeout(() => window.close(), 3000)

  useEffect(() => {
    dispatch(changeAppLayout({ hiddeNavMenu: true }))

    if(!error && code){
      client.generateAccessToken(code)
        .then((d) => {
          console.log(d)

          setIsLoading(false)
        })
        .catch((_err) => {
            setIsErrorOccuerd(true)
            setIsLoading(false)
          }
        )

    }else{
      setIsErrorOccuerd(true)
      setIsLoading(false)
    }

    if(!isLoading){
      closeTab()
    }
  
    return () => {
      dispatch(changeAppLayout({ hiddeNavMenu: false }))
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div>
          <BrandLogo logoWidth='100px' taglineWidth='500px' />
        </div>
        <div style={{ height: '100%' }}>

          {isLoading 
              ? 
                <div className={styles.loader_container}>
                  <h1>Processing...</h1>
                  <Loader />
                </div>
              : 
                isErrorOccured 
                  ? 
                    <div className={styles.message_container}>
                      <h1>Something went wrong</h1>
                      <BiError size={50} color='red' />
                    </div>
                  : <div className={styles.message_container}>
                      <h1>Success</h1>
                      <AiOutlineCheck size={50} color='green' />
                    </div>      
          }
        </div>

      </div>
    </>
  )
}