import styles from './NavMenu.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BrandLogo } from '../General/BrandLogo'
import { Link, useLocation } from 'react-router-dom'
import { routesDefinition } from '../General/AppRoutes'
import { useState } from 'react'
import { useAppSelector } from 'src/lib/hooks/redux'

export function NavMenu(){
  const hiddeNavMenu = useAppSelector((s) => s.appLayout.hiddeNavMenu)
  const [ showNavMenu, setShowNavMenu ] = useState(true)
  const { pathname: currPath } = useLocation()

  return (
    !hiddeNavMenu &&
    <div className={`${styles.container} ${!showNavMenu ? styles.container_hidden : ''}`}>
      <div 
        className={`${styles.nav_toggle} ${ !showNavMenu ? styles.nav_toggle_off : '' }`} 
        onClick={() => setShowNavMenu(!showNavMenu)}
      >
        <AiOutlineArrowLeft size='20px' />
      </div>
      {showNavMenu 
        ? <BrandLogo logoWidth='100px' taglineWidth='200px' /> 
        : <></>
      }
      <ul className={styles.nav_container}>
        {routesDefinition
          .filter((def) => !def.hidden)
          .map((def, i) => 
            <li key={i}>
              <Link to={def.path} style={{textDecoration: 'none', color: 'black'}}>
                <div 
                  className={
                    `${styles.nav_item} ${currPath === def.path ? styles.nav_item_active : '' }`
                  }
                >
                    {def.icon}
                    {showNavMenu ? def.name : ''}
                </div>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}