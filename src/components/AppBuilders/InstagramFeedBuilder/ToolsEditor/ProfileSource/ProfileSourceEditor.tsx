/* eslint-disable react-hooks/exhaustive-deps */
import { getInstagramAPIClient } from 'src/lib/services/api/instagram-api.client'
import styles from './ProfileSourceEditor.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TOKEN_KEY } from 'src/components/Authorization/AuthorizationWrapper'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks/redux'
import { updateIntegrationState } from 'src/state/instagram-integration/instagram-integration.slice'

export const ProfileSourceEditor = () => {
  const userToken = localStorage.getItem(TOKEN_KEY)
  const client = getInstagramAPIClient(userToken)
  const { isIntegrationComplete, profileName } = useAppSelector((state) => ({...state.instagramIntegration, profileName: state.instagramFeed.profile_name}))
  const dispatch = useAppDispatch()

  const [authorizeLink, setAuthorizeLink] = useState<string>(null)

  useEffect(() => {
    client
      .getAuthorizeLink()
      .then((link) => setAuthorizeLink(link))
  }, [])

  return (
    <>
      <h3>Source</h3>
      {!isIntegrationComplete 
        ? 
          <div className={styles.source_container}>
            <div>
              <h4>Instagram Connection</h4>
              <p>Authorize in your Instagram account to display profile.</p>
            </div>
            <button className={styles.connect_button}>
              <AiOutlineInstagram size={15} />
              <a
                href={authorizeLink}
                target='_blank'
                rel='noreferrer'
                onClick={() => dispatch(updateIntegrationState({ isIntegrationProcessing: true }))}
              >
                Connect to Instagram
              </a>
            </button>
          </div>
        : 
          <>
            <div className={styles.source_container}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5>@{profileName}</h5>
                <p>Connected</p>
              </div>
            </div>
          </>
      }
    </>
  )
}