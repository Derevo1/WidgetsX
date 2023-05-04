import styles from './Builder.module.css'
import { useEffect } from "react"
import { useAppDispatch } from "src/lib/hooks/redux"
import { changeAppLayout } from "src/state/app-layout/app-layout.slice"
import { VideoBuilder } from "./VideoBuilder/VideoBuilder"
import { useSearchParams } from "react-router-dom"
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
          <p>Untitled widget</p>
          <BrandLogo logoWidth='100px' hiddeTagLine={true} />
          <div className={styles.builder_header_buttons}>
            <p>Cancel</p>
            <p>Save</p>
          </div>
        </div>
        {buildersMap[type]}
      </div>
    </>
  )
}