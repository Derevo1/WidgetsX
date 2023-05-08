import styles from './VideoBuilder.module.css'
import { VideoBuilderTools } from "./VideoBuilderTools"

export const VideoBuilder = () => {
  return (
    <>
      <div className={styles.builder_container}>
        <VideoBuilderTools/>
        <div className={styles.preview_container}>
          <div className={styles.video_preview}></div>
        </div>
      </div>
    </>
  )
}