import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
    // alert(searchCountry);
  };

  useEffect(() => {
    props.onSearch(searchCountry);
  }, [searchCountry]);

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" placeholder="Search Country" value={searchCountry} onChange={handleChange} />
    </div>
  );
};

export default Search;