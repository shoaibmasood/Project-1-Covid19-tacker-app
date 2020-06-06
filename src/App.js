import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
      </div>
    );
  }
}
export default App;
