import styles from './BrandLogo.module.css'
import Logo from '@assets/images/widgetsX-logo.svg'
import Tagline from '@assets/images/widgetsX-tagline.svg'

export function BrandLogo(){
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img_logo} src={Logo} alt="logo" />
        <img className={styles.img_tagline} src={Tagline} alt="tagline" />
      </div>
    </>
  )
}