/* eslint-disable react-hooks/exhaustive-deps */
import styles from './InstagramFeedBuilder.module.css'
import { AiOutlineInstagram, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { InstagranFeeTools } from "./InstagramFeedTools"
import { useAppDispatch, useAppSelector } from 'src/lib/hooks/redux'
import { useEffect, useState } from 'react'
import { getInstagramAPIClient } from 'src/lib/services/api/instagram-api.client'
import { TOKEN_KEY } from 'src/components/Authorization/AuthorizationWrapper'
import { updateProfile } from 'src/state/instagram-feed/instagram-feed.slice'
import { Loader } from 'src/components/General/Loader'

export const InstagramFeedBuilder = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  const client = getInstagramAPIClient(token)
  const dispatch = useAppDispatch()

  const { isIntegrationComplete, isIntegrationProcessing, externalProfileID } = useAppSelector((s) => s.instagramIntegration)
  const profile = useAppSelector((s) => (
    { 
      name: s.instagramFeed.profile_name,
      img: s.instagramFeed.profile_img,
      posts: s.instagramFeed.posts,
      ...s.instagramFeed.bio
    }
  ))
  const [selectedPostIndex, setSelectedPostIndex] = useState<number>(0)

  useEffect(() => {
    if(isIntegrationComplete){
      client.getUserMediaData(externalProfileID)
        .then((d) => {
          dispatch(updateProfile(d))
        })
        .catch((err) => alert(err?.message || 'Error occured'))
    }
  }, [isIntegrationComplete])

  return (
    <>
      {isIntegrationProcessing && 
        <div className={styles.loader_wrapper}>
          <Loader/>
        </div>
      }
      <div className={styles.builder_container}>
        <InstagranFeeTools />
        <div className={styles.preview_container}>
          <div className={styles.feed_container}>
            <div className={styles.feed_bio}>
              <div className={styles.profile_head}>
                <div className={styles.profile_img_wrapp}>
                  <img src={profile.img} alt="profile_avatar" />
                </div>
                <p>{profile.name}</p>
              </div>
              <div className={styles.profile_info}>
                <div className={styles.profile_info_item}>
                  <p>{profile.posts_amount}</p>
                  <p>Posts</p>
                </div>
                <div className={styles.profile_info_item}>
                  <p>{profile.followers_amount}</p>
                  <p>Followers</p>
                </div>
                <div className={styles.profile_info_item}>
                  <p>{profile.following_amount}</p>
                  <p>Following</p>
                </div>
              </div>
              <div>
                <button className={styles.follow_button}>
                  <AiOutlineInstagram size={20}/>
                  <p>Follow</p>
                </button>
              </div>
            </div>
            <div className={styles.feed_gallery}>
              {profile.posts.map((p, i) =>
                <div 
                  className={styles.post_img}
                  style={{ backgroundImage: `url(${p.img})` }}
                  onMouseEnter={() => setSelectedPostIndex(i)}
                  onMouseLeave={() => setSelectedPostIndex(null)}
                >
                { selectedPostIndex != null && selectedPostIndex === i 
                  ? 
                    <div className={styles.post_info}>
                      <div className={styles.post_info_item}>
                        <AiOutlineHeart size={15}/>
                        <p>{p.likes}</p>
                      </div>
                      <div className={styles.post_info_item}>
                        <FaRegComment size={15}/>
                        <p>{p.comments}</p>
                      </div>
                    </div>
                  : <></>
                }   
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}