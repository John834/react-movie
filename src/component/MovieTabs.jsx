import React from 'react';

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props
  const handleCLick = value => () => updateSortBy(value)
  const getClassLink = (value) => `nav-link ${sort_by === value ? "active" : ''}`

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div className={getClassLink('popularity.desc')} onClick={handleCLick("popularity.desc")}>
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div className={getClassLink('revenue.desc')} onClick={handleCLick("revenue.desc")}>
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
      <div className={getClassLink('vote_average.desc')} onClick={handleCLick("vote_average.desc")}>
          Vote average desc
        </div>
      </li>
    </ul>
  );
}

export default MovieTabs;