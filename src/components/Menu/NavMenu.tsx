import styles from './NavMenu.module.css'
import { BrandLogo } from '../General/BrandLogo'

export function NavMenu(){
  return (
    <div className={styles.container}>
      <BrandLogo />
    </div>
  )
}