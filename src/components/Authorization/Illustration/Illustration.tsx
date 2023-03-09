import styles from './Illustration.module.css'
import TeamSupport from '@assets/images/sign-in/widgetsX-team-support.svg'
import TeamWeb from '@assets/images/sign-in/widgetsX-team-web.svg'
import TeamAnalytics from '@assets/images/sign-in/widgetsX-team-analytics.svg'
import TeamPresentation from '@assets/images/sign-in/widgetsX-team-presentation.svg'
import TeamConsultig from '@assets/images/sign-in/widgetsX-team-consulting.svg'
import { BrandLogo } from "../../General/BrandLogo";

export function Illustration(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome_label}>
          <BrandLogo logoWidth="300px" />
        </div>
        <div className={styles.illustration_container}>
          <img src={TeamSupport} alt="widgetsx" />
          <img src={TeamWeb} alt="widgetsx" />
          <img src={TeamAnalytics} alt="widgetsx" />
          <img src={TeamConsultig} alt="widgetsx" />
          <img src={TeamPresentation} alt="widgetsx" />
        </div>
      </div>
    </>
  )
}