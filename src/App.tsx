import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['App']}>
      <h1 className={styles['app-heading']}>WaterLoop World</h1>
      <p>Heey</p>
    </div>
  );
}

export default App;
