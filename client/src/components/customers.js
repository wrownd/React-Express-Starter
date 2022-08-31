import React, { Component } from 'react';
import './communities.css';

class Communities extends Component {
  constructor() {
    super();
    this.state = {
      communities: []
    };
  }

  componentDidMount() {
    fetch('/api/communities')
      .then(res => res.json())
      .then(communities => this.setState({community}, () => console.log('comms fetched...', communities)));
  }

  render() {
    return (
      <div>
        <h2>Communities</h2>
        <ul>
        {this.state.communities.map(community => 
          <li key={community.id}>{community.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Communities;
