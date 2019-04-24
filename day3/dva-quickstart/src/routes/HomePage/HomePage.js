import React from 'react';
import { connect } from 'dva';
// import styles from './HomePage.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Carousels from '../../components/Carousels/Carousels';

function HomePage() {
  return (
    <div>
      <Header />
      <Search type="3" />
      <Carousels />
    </div>
  );
}

HomePage.propTypes = {
};

export default connect()(HomePage);
