import styles from '../Applications.module.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationIcon } from '../../partials/ApplicationIcon';

interface IApplicationCardProps {
  id: number;
  type: string;
  label: string;
  status: string;
  color?: string;
}

export const ApplicationCard = ({ type, status, label, color, id }: IApplicationCardProps) => {
  const [showStats, setShowStats] = useState(false)
  const [showEditLink, setEditShowLink] = useState(false)
  const defaultColor = '#e75151e7'

  return (
    <>
      <div 
        className={`${styles.application_card} ${showEditLink ? styles.filter : ''}`} 
        style={{backgroundColor: color || defaultColor}} 
      >
        <ApplicationIcon type={type} className={styles.application_card_icon} size={60}/>
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
        <div 
          className={styles.application_builder_link_container}
          onMouseEnter={() => setEditShowLink(showStats ? false : true)}
          onMouseLeave={() => setEditShowLink(false)}
        >
          {showEditLink && !showStats &&
            <Link to={`/builder?type=${type}&id=${id}`} style={{textDecoration: 'none', color: 'black'}}>
              <div className={styles.application_builder_link}>
                 <button className={styles.application_card_button}>Edit</button>
              </div>
            </Link>
          }
        </div>
      </div>
    </>
  )
}