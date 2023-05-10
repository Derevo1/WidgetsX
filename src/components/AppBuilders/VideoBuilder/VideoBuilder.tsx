import styles from './VideoBuilder.module.css'
import { BsUpload } from 'react-icons/bs'
import { VideoBuilderTools } from "./VideoBuilderTools"
import { useRef } from 'react'

export const VideoBuilder = () => {
  const fileInputElem = useRef(null)

  const emitFileInputClick = () => {
    fileInputElem.current.click()
  }

  return (
    <>
      <div className={styles.builder_container}>
        <VideoBuilderTools/>
        <div className={styles.preview_container}>
          <div className={styles.video_preview}>
            <div className={styles.video_upload} onClick={emitFileInputClick}>
              <BsUpload size={60}/>
              <p>Upload file</p>
              <input type="file" accept='video/*' style={{display: 'none'}} ref={fileInputElem}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}