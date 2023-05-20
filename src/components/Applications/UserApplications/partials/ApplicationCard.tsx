import styles from '../Applications.module.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { VscCopy } from 'react-icons/vsc'
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
  const [showExport, setShowExport] = useState(false)
  const [showEditLink, setEditShowLink] = useState(false)
  const defaultColor = '#e75151e7'
  const exportScriptString = `<script src="http://localhost:3000/widgets/script/${++id}"></script>`

  return (
    <>
      <div 
        className={`${styles.application_card} ${showEditLink ? styles.filter : ''}`} 
        style={{backgroundColor: color || defaultColor}} 
      >
        <ApplicationIcon type={type} className={styles.application_card_icon} size={60}/>
        <div className={styles.application_card_head}>
          <h3>{label}</h3>
          <button className={styles.application_card_button} onClick={() => setShowExport(true)}>Export</button>
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
        {showExport &&
            <div className={styles.export_container}>
              <div className={styles.export_popup}>
                <RxCross2 size={25} className={styles.hide_export_button} onClick={() => setShowExport(false)}/>
                <h2>Export widget to your website</h2>
                <p>Copy and paste this code into desired place of your website (HTML editor, website template, theme, etc)</p>
                <div className={styles.export_wrapper}>
                  <div className={styles.export_copy}>
                    <VscCopy size={25} />
                  </div>
                  <textarea disabled={true} className={styles.export_text_area}>
                    {exportScriptString}
                  </textarea>
                </div>
              </div>
            </div>
        }
    </>
  )
}