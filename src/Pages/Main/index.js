import React from 'react';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}
