import styles from './ProfileSourceEditor.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'

export const ProfileSourceEditor = () => {
  return (
    <>
      <h3>Source</h3>
      <div className={styles.source_container}>
        <div>
          <h4>Instagram Connection</h4>
          <p>Authorize in your Instagram account to display profile.</p>
        </div>
        <button className={styles.connect_button}>
          <AiOutlineInstagram size={15} />
          Connect to Instagram
        </button>
      </div>
    </>
  )
}