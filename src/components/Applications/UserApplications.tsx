import styles from './Applications.module.css'
import { useAppSelector } from 'src/lib/hooks/redux'
import { ApplicationCard } from "./partials/ApplicationCard"

export const UserApplications = () => {
  const userApps = useAppSelector((state) => state.userApps)

  return (
    <>
      <div className={styles.applications_container}>
        {userApps.map((app, i) => 
          <ApplicationCard
            id={i} 
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