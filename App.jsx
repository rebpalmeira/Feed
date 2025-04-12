import { Header } from './components/Header'
import {Post} from './Post'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Diego Fernandes"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ipsam error culpa, magnam dolore fuga numquam dolores ex est ab fugiat aliquid beatae adipisci labore perspiciatis, dolor praesentium, quo debitis." 
        />
        </main>
      </div>
   </div>
  )
}
