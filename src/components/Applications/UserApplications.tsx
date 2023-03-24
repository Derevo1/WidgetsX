import styles from './Applications.module.css'
import { userApps } from "./mock-data"
import { ApplicationCard } from "./partials/ApplicationCard"


export const UserApplications = () => {
  return (
    <>
      <div className={styles.applications_container}>
        {userApps.map((app) => 
          <ApplicationCard 
            type={app.type}
            status={app.status}
            label={app.label}
            color={app.color}
          />
        )}
      </div>
    </>
  )
}