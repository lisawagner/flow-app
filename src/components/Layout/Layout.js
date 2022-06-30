import { Outlet } from 'react-router-dom';
import { useTitle } from '../../context/TitleContext';

// styles
import styles from './Layout.module.css'

// components
import NavbarRoot from '../NavbarRoot/NavbarRoot'
import PageTopBar from '../../components/PageTopBar/PageTopBar'

export default function Layout() {
  const { title } = useTitle()

  return (
    <>
      <NavbarRoot />
      <main className={styles.flowMain}>
        <PageTopBar title={title} />
        <div className={styles.pageWrap}>
          <Outlet/> 
        </div>    
      </main>
    </>
  )
}
