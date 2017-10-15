import React from 'react';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'TECHTALK #1',
        date: 'Saturday, October 14, 2017',
        time: '10:00 AM',
        location: 'Kampus II UIN Alauddin',
        rsvp: 127,
      }, {
        name: 'TECHTALK #2',
        date: 'Saturday, December 16, 2017',
        time: '10:00 AM',
      }],
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  onButtonDeleteClicked(index) {
    return function() {
      let data = this.state.data;
      data.splice(index, 1);
      this.setState({data: data});
      console.log(this.state.data);
    }
  }

  render() {
    return (
      <div id="banner" className="page-header">
        <div className="row">
          <div className="col-md-12">
            {this.state.data.map((event,index) => (
              <div className="row">
                <div className="col-md-12">
                  <h1>{event.name}</h1>
                  <h2>{event.date}<br/><small>{event.time}</small></h2>
                  {event.location &&
                      <p>at {event.location}. {event.rsvp} peoples will come.</p>
                  }
                  <button onClick={this.onButtonDeleteClicked(index).bind(this)}>Delete {event.name}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
