import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div id="banner" className="page-header">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h1>BugisDev Meetup</h1>
            <p className="lead">Meetup will be held every two (2) months with different location and speakers.</p>
            <p>If you want to share something to people, you can start with sharing your experience here at BugisDev Meetup.</p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="sponsor">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
