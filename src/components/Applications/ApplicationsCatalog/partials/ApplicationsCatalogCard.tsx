import styles from '../ApplicationsCatalog.module.css'
import { ApplicationIcon } from '../../partials/ApplicationIcon'

interface IAppCatalogCardProps {
  type: string
  name: string
  description: string
}

export const ApplicationsCatalogCard = ({ type, name, description }: IAppCatalogCardProps) => {
  return (
    <>
      <div className={styles.card_container}>
        <ApplicationIcon type={type} className='' size={50} />
        <div className={styles.card_text}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}