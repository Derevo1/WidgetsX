import styles from './NavMenu.module.css'
import { BrandLogo } from '../General/BrandLogo'
import { Link } from 'react-router-dom'
import { routesDefinition } from '../General/AppRoutes'

export function NavMenu(){
  return (
    <div className={styles.container}>
      <BrandLogo logoWidth='100px' taglineWidth='200px' />
      <ul className={styles.nav_container}>
        {routesDefinition
          .filter((def) => !def.hidden)
          .map((def) => 
            <li>
              <div className={styles.nav_item}>
                {def.icon}
                <Link to={def.path}>{def.name}</Link>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}