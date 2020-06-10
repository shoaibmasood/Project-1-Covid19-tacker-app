import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

import styles from './App.module.css';
import { fetchedCardData } from './api';

class App extends React.Component {
  state = {
    globalData: {},
  };

  async componentDidMount() {
    const resp = await fetchedCardData();
    console.log(resp);
    this.setState({ globalData: resp });
  }
  render() {
    const { globalData } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={globalData} />
      </div>
    );
  }
}
export default App;
