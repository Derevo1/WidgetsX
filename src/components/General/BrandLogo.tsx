import styles from './BrandLogo.module.css'
import Logo from '@assets/images/widgetsX-logo.svg'
import Tagline from '@assets/images/widgetsX-tagline.svg'
import { Link } from 'react-router-dom'

interface IBrandLogoProps {
  logoWidth?: string,
  taglineWidth?: string,
  hiddeTagLine?: boolean
}

export function BrandLogo({logoWidth, taglineWidth, hiddeTagLine}: IBrandLogoProps = {}){
  return (
    <>
      <Link to='/WidgetsX' >
        <div className={styles.container}>
          <img style={{ width: logoWidth }} src={Logo} alt="logo" />
          {!hiddeTagLine && <img style={{ width: taglineWidth }} className={styles.img_tagline} src={Tagline} alt="tagline" />}
        </div>
      </Link>
    </>
  )
}