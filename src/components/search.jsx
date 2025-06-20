const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="search">
        {searchTerm}
        <div>
          <img src="/search.svg" />
          <input
            type="text"
            placeholder="Search through thousand of movies"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};
export default Search;
