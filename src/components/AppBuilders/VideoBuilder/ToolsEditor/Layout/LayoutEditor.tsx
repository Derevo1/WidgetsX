import { useState } from 'react'
import styles from './LayoutEditor.module.css'
import { AiOutlineRight } from 'react-icons/ai'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { IoPhoneLandscapeOutline } from 'react-icons/io5'

export const LayoutEditor = () => {
  const [selectedOrientation, setSelectedOrientation] = useState('vertical')

  return (
    <>
      <h3>Layout</h3>
      <div className={styles.orientation_options}>
        <div 
          className={`${styles.option_item} ${selectedOrientation === 'vertical' ? styles.selected : ''}`}
          onClick={() => setSelectedOrientation('vertical')}
        >
          <IoPhonePortraitOutline size={20}/>
          <p>Vertical</p>
        </div>
        <div
          className={`${styles.option_item} ${selectedOrientation === 'horizontal' ? styles.selected : ''}`}
          onClick={() => setSelectedOrientation('horizontal')}
        >
          <IoPhoneLandscapeOutline size={20}/>
          <p>Horizontal</p>
        </div>
      </div>
      <div className={styles.group_options}>
        <div className={styles.group_item}>
          <p>Feed Title</p>
          <AiOutlineRight size={20}/>
        </div>
        <div className={styles.group_item}>
          <p>Slider Settings</p>
          <AiOutlineRight size={20}/>
        </div>
        <div className={styles.group_item}>
          <p>Other</p>
          <AiOutlineRight size={20}/>
        </div>
      </div>
    </>
  )
}