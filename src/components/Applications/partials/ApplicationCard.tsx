import styles from '../Applications.module.css'
import { BsInstagram, BsCameraVideo, BsEye, BsEyeSlash } from 'react-icons/bs'
import { ReactElement, useState } from 'react';
import { IconType } from 'react-icons';

interface IApplicationCardProps {
  type: string;
  label: string;
  status: string;
  color?: string;
}

function getApplicationIcon(type: string){
  const iconsMap: Record<string, ReactElement<IconType>> = {
    'Instagram': <BsInstagram className={styles.application_card_icon} size={60} />,
    'Video': <BsCameraVideo className={styles.application_card_icon} size={70} />
  }

  return iconsMap[type]
}

export const ApplicationCard = ({ type, status, label,color }: IApplicationCardProps) => {
  const [showStats, setShowStats] = useState(false)
  const icon = getApplicationIcon(type)
  const defaultColor = '#e75151e7'

  return (
    <>
      <div className={styles.application_card} style={{backgroundColor: color || defaultColor}}>
        {icon}
        <div className={styles.application_card_head}>
          <h3>{label}</h3>
          <button className={styles.application_card_button}>Export</button>
        </div>
        <div className={styles.stats_toogle} onClick={() => setShowStats(!showStats)}>
          <p>{showStats ? 'Hidde stats' : 'View stats'}</p>
          {showStats ? <BsEyeSlash /> : <BsEye />}
        </div>
        {showStats &&
          <div className={styles.application_card_stats}>
            <div className={styles.application_card_stats_item}>
              <p className={styles.stats_item_label}>Type:</p>
              <p>{type}</p>
            </div>
            <div className={styles.application_card_stats_item}>
              <p className={styles.stats_item_label}>Status:</p>
              <p>{status}</p>
            </div>
            <div className={styles.application_card_stats_item}>
              <p className={styles.stats_item_label}>Type:</p>
              <p>{type}</p>
            </div>
            <div className={styles.application_card_stats_item}>
              <p className={styles.stats_item_label}>Status:</p>
              <p>{status}</p>
            </div>
          </div>        
        }
      </div>
    </>
  )
}