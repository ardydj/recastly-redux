import React from 'react';
import handleVideoSearch from './../actions/search.js';

import store from './../store/store.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(value) {
    console.log('value:', value)
    store.dispatch(handleVideoSearch(value));
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down" onClick={(e) => {
          console.log('context for THIS: ', this);
          e.preventDefault();
          this.handleSubmit(this.state.value);
        }}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
