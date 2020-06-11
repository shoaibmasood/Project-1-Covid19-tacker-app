import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';

import styles from './App.module.css';
import { fetchedCardData } from './api';

class App extends React.Component {
  state = {
    globalData: {},
    graphData: {},
  };

  async componentDidMount() {
    const resp = await fetchedCardData();

    // console.log(resp);
    this.setState({
      globalData: resp.data.data[0],
      graphData: resp.data,
    });
  }
  render() {
    // console.log(this.state.graphData);
    const { globalData, graphData } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={globalData} />
        <Chart data={graphData} />
      </div>
    );
  }
}
export default App;
