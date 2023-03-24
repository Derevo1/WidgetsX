import styles from './Home.module.css'
import { UserApplications } from "../Applications/UserApplications"

export const Home = () => {
  return (
    <div className={styles.home_container}>
      <UserApplications />
    </div>
  )
}