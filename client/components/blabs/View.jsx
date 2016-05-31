var React = require('react');
var BlabsList = require('./List.jsx');
var BlabsForm = require('./Form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readBlabsFromAPI();
  },
  readBlabsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/blabs', function(blabs) {
      this.setState({data: blabs});
    }.bind(this));
  },
  writeBlabToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/blabs', data, function(blab) {
      var blabs = this.state.data;
      blabs.unshift(blab);
      this.setState({data: blabs});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsForm writeBlabToAPI={this.writeBlabToAPI} signedIn={this.props.signedIn} />
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});