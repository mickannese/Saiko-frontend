import React from 'react';

var Search = (props) => {
  return (
    <form className="search-bar" onSubmit={props.submit}>
      <input
        className="input-bar"
        value={props.current}
        type="text"
        name="search"
        onChange={props.update}
      />
    </form>
  )
}

export default Search;