import styles from './App.module.css';
import { AppRoutes } from 'src/components/General/AppRoutes';
import { NavMenu } from '../components/Menu/NavMenu';

function App() {
  return (
    <>
      <div className={styles.container}>
        <NavMenu />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
