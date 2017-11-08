import React from 'react';
import './SearchBar.css';

const sortByOption = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  renderSortByOption(){
    return Object.keys(sortByOption).map(sortByOption => {
      let sortByOptionValue = sortByOption[sortByOption]
    return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOption}</ul>
        </div>
        <div class="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div class="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
