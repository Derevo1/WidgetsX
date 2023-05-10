import styles from './Home.module.css'
import { UserApplications } from "../Applications/UserApplications/UserApplications"
import { ApplicationCatalog } from '../Applications/ApplicationsCatalog/ApplicationsCatalog'

export const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.user_applications_container}>
        <h1>My applications</h1>
        <UserApplications />
      </div>
      <div>
        <h1>Explore other applications</h1>
        <ApplicationCatalog />
      </div>
    </div>
  )
}