var React = require('react');
var Reqwest = require('reqwest');
var BlabsView = require('../blabs/View.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render: function () {
    return (
      <div id="content">
        <BlabsView origin={this.props.origin} readFromAPI={this.readFromAPI} />
      </div>
    );
  }
});