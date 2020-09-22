import React from 'react';
import css from './SearchContainer.module.css';

function SearchContainer() {
  return (
    <div className={css.App}>
      <div>Search parameters here</div>
      <div>Notification here?</div>
      <div>Search results or map here</div>
      <div>Free apartments or map here</div>
    </div>
  );
}

export default SearchContainer;
