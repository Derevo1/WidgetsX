import styles from './ApplicationsCatalog.module.css'
import { ApplicationsCatalogCard } from "./partials/ApplicationsCatalogCard"

const applicationsCatalog = [
  {
    type: 'Instagram',
    name: 'Instagram Feed',
    description: 'Add posts from your Instagram account to your website'
  },
  {
    type: 'Video',
    name: 'Video Gallery',
    description: 'Display videos on your website'
  }
]

export const ApplicationCatalog = () => {
  return (
    <>
      <div className={styles.app_catalog_container}>
        {applicationsCatalog.map((a) => 
          <ApplicationsCatalogCard type={a.type} name={a.name} description={a.description}/>
        )}
      </div>
    </>
  )
}