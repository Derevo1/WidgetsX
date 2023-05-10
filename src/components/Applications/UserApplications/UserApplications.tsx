import styles from './Applications.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
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
        <div className={styles.new_application}>
          <button className={styles.button_new}>
            <AiOutlinePlus size={20}/>
            <h3>Add application</h3>
          </button>
        </div>
      </div>
    </>
  )
}