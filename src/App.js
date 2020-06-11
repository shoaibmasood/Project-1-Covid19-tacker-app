import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';

import styles from './App.module.css';
import { fetchedCardData } from './api';

class App extends React.Component {
  state = {
    globalData: {},
    graphData: [],
    loading: true,
  };

  async componentDidMount() {
    const data = await fetchedCardData();
    console.log(data);
    this.setState({
      globalData: data[0],
      graphData: data,
      loading: false,
    });
  }
  render() {
    // console.log(this.state.graphData);

    const { globalData, graphData, loading } = this.state;
    console.log(globalData);
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={globalData} loader={loading} />
        <Chart data={graphData} />
      </div>
    );
  }
}
export default App;
