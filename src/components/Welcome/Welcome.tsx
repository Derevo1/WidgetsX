import styles from './Welcome.module.css'
import { BrandLogo } from "../General/BrandLogo";

export function Welcome(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome_label}>
          <BrandLogo logoWidth="400px" hiddeTagLine={true} />
          <h1>Improve your website without coding</h1>
        </div>
      </div>
    </>
  )
}