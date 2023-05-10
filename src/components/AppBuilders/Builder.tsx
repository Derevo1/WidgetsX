import styles from './Builder.module.css'
import { useEffect } from "react"
import { useAppDispatch } from "src/lib/hooks/redux"
import { changeAppLayout } from "src/state/app-layout/app-layout.slice"
import { VideoBuilder } from "./VideoBuilder/VideoBuilder"
import { Link, useSearchParams } from "react-router-dom"
import { BrandLogo } from '../General/BrandLogo'

const buildersMap: Record<string, JSX.Element> = {
  'Video': <VideoBuilder/>
}

export const Builder = () => {
  const [ params ] = useSearchParams()
  const type = params.get('type')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeAppLayout({ hiddeNavMenu: true }))
  
    return () => {
      dispatch(changeAppLayout({ hiddeNavMenu: false }))
    }
  })

  return (
    <>
      <div className={styles.builder_container}>
        <div className={styles.builder_header}>
          <input className={styles.title_input} placeholder='Untitled widget'/>
          <BrandLogo logoWidth='100px' hiddeTagLine={true} />
          <div className={styles.builder_header_buttons}>
            <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
              <p className={`${styles.button} ${styles.cancel}`}>Cancel</p>
            </Link>
            <p className={`${styles.button} ${styles.save}`}>Save</p>
          </div>
        </div>
        {buildersMap[type]}
      </div>
    </>
  )
}